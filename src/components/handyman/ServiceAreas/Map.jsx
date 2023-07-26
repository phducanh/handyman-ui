import { useEffect, useState } from 'react';
import { MapContainer, Polygon, TileLayer, Tooltip } from 'react-leaflet';
import { useSelector } from 'react-redux';

import Button from '@/components/buttons/Button';

import {
  getCurrentBusiness,
  Ping,
  PutNewInfoBusiness,
} from '@/api/user-service';
import { ROLE } from '@/pb/const';
import ui from '@/utils/ui';

import { statesData2 } from './map2';
let selected = [];

const CustomPolygon = ({ section, zipAreaClick, mode }) => {
  const coordinates = section.geometry.coordinates[0].map((item) => [
    item[1],
    item[0],
  ]);

  return (
    <Polygon
      key={section.id}
      pathOptions={{
        fillColor: selected.includes(section?.properties.GEOID10)
          ? '#ff3036'
          : '#FD8D3C',
        fillOpacity: 0.7,
        weight: 2,
        opacity: 1,
        dashArray: '3',
        color: 'white',
      }}
      positions={coordinates}
      eventHandlers={{
        mouseover: (e) => {
          const layer = e.target;
          layer.setStyle({
            dashArray: '',
            fillColor: selected.includes(section?.properties.GEOID10)
              ? '#ff3036'
              : '#BD0026',
            fillOpacity: 0.7,
            weight: 2,
            opacity: 1,
            color: 'white',
          });
        },
        mouseout: (e) => {
          const layer = e.target;
          layer.setStyle({
            fillOpacity: 0.7,
            weight: 2,
            dashArray: '3',
            color: 'white',
            fillColor: selected.includes(section?.properties.GEOID10)
              ? '#ff3036'
              : '#FD8D3C',
          });
        },
        click: (e) => {
          const layer = e.target;
          layer.setStyle({
            dashArray: '',
            fillColor: '#ff3036',
            fillOpacity: 0.7,
            weight: 2,
            opacity: 1,
            color: 'white',
          });
          if (mode === 'change') {
            zipAreaClick(e, section?.properties.GEOID10);
          }
        },
      }}
    >
      <Tooltip sticky>{section?.properties.GEOID10}</Tooltip>
    </Polygon>
  );
};

export default function Map() {
  const [mode, setMode] = useState('');
  const userInfor = useSelector((state) => state.auth);
  const [isFirstSignUp, setIsFirstSignUp] = useState();

  const changeMode = () => {
    setMode('change');
  };
  useEffect(() => {
    Ping({ UserId: '', Role: ROLE.UNRECOGNIZED }).then((data) => {
      setIsFirstSignUp(data.process && data.process == 3);
    });
  });
  const updateZipcode = () => {
    const userInfo = {
      id: userInfor?.id,
      UserId: '',
      name: '',
      phone: '',
      logoUrl: '',
      bannerUrl: '',
      website: '',
      description: '',
      zipcodes: selected,
    };
    PutNewInfoBusiness(userInfo).then(() => {
      if (isFirstSignUp) {
        ui.alertSuccess('Your business information is all set!');
      }
      setMode('');
    });
  };
  const anygonow_options = {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
      'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    mapbox_url:
      'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw',
    center: [32.838131, -83.634705],
    ziparea_selected_color: '#ff3036',
    ziparea_unselected_color: '#000000',
    ziparea_unselected_border_color: '#fff',
    ziparea_selected_border_color: '#000000',
    ziparea_border_weight: 1,
  };

  const options = {
    maxZoom: 10,
    attribution: anygonow_options['attribution'],
    id: 'mapbox/light-v9',
    tileSize: 512,
    zoomOffset: -1,
    updateWhenZooming: false,
    updateWhenIdle: true,
  };

  function colorArea(e) {
    var col =
      e.target.options.fillColor == anygonow_options['ziparea_selected_color']
        ? anygonow_options['ziparea_unselected_color']
        : anygonow_options['ziparea_selected_color'];

    e.target.setStyle({
      fillColor: col,
    });
  }

  // const [selectedZip, setSelectedZip] = useState([]);
  const [triggerRender, setTriggerRender] = useState(false);

  function zipAreaClick(event, zipcode = '') {
    if (!selected.includes(zipcode)) {
      // setSelectedZip([zipcode, ...selectedZip]);

      selected.push(zipcode);
    } else {
      const index = selected.indexOf(zipcode);
      // setSelectedZip([zipcode, ...selectedZip]);
      if (index !== -1) {
        selected.splice(index, 1);
      }
    }
    setTriggerRender(!triggerRender);
    colorArea(event);
  }

  function deleteZip(zip) {
    const index = selected.indexOf(zip);
    // setSelectedZip([zipcode, ...selectedZip]);
    if (index !== -1) {
      selected.splice(index, 1);
    }
    setTriggerRender(!triggerRender);
  }

  useEffect(() => {
    getCurrentBusiness({ id: userInfor?.id, UserId: '' }).then((res) => {
      if (selected.length == 0) {
        selected.push(...res.business?.zipcodes);
      }

      setTriggerRender(!triggerRender);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log('sel', triggerRender);
  }, [triggerRender]);

  return (
    <div>
      <div className='flex flex-wrap'>
        <div className='xs:mr-0 sm:mr-0 sm:w-full xl:mr-5 xl:w-9/12'>
          <MapContainer
            center={anygonow_options.center}
            zoom={options.maxZoom}
            tileSize={512}
            style={{ width: '100%' }}
            className='map-container-custom'
          >
            <TileLayer
              url='https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=kXBRNqrBD7i5cH2oXXS7'
              attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
            />

            {statesData2.map((state) => {
              const allState = state.features.map((section) => {
                return (
                  <CustomPolygon
                    key={section.id}
                    section={section}
                    zipAreaClick={zipAreaClick}
                    mode={mode}
                  />
                );
              });
              return allState;
            })}
          </MapContainer>
        </div>

        <div className='flex-1'>
          <div className='border flex-1 p-4 rounded-xl zip-list'>
            <div className='font-bold mb-4 text-left'>
              Zipcode Service Support
            </div>
            {selected.length > 0 &&
              selected.map((item, index) => {
                return (
                  <div
                    className={`${
                      index < selected.length - 1 ? 'border-b' : ''
                    } flex justify-between py-3 leading-6`}
                    key={item}
                  >
                    {item}
                    {mode === 'change' && (
                      <div
                        className='cursor-pointer delete'
                        onClick={() => {
                          deleteZip(item);
                        }}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src='/images/icons/Trash.svg' alt='' />
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
          <div className='mt-5'>
            <div>
              {mode === 'change' && (
                <Button
                  className='bg-orange-1000 hover:bg-orange-700'
                  onClick={updateZipcode}
                  variant='primary'
                >
                  Save
                </Button>
              )}{' '}
              {mode === '' && (
                <Button
                  className='bg-orange-1000 hover:bg-orange-700'
                  onClick={changeMode}
                  variant='primary'
                >
                  Update
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
