import { GetStaticProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import * as React from 'react';
import { useSelector } from 'react-redux';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/BaseLayout';
import { PageNavigation } from '@/components/Pagination';
// import { PageNavigation } from '@/components/Pagination';
import Seo from '@/components/Seo';

import { CancelProject, GetProjects } from '@/api/user-service';
import ui from '@/utils/ui';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  };
};
export interface dataProject {
  serviceId: string;
  serviceName: string;
  total: number;
  zipcode: string;
  image: string;
}

export interface dataCancelProject {
  UserId: string;
  zipcode: string;
  categoryId: string;
}

export default function IndexPage() {
  const [isCancel, setIsCancel] = React.useState<boolean>(false);
  const userInfo = useSelector((state: any) => state.auth);
  const [projects, setProjects] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [total, setTotal] = React.useState<number>(1);
  const [projectCurrent, setProjectCurrent] = React.useState<dataProject>();
  const [indexProject, setIndexProject] = React.useState<number>(0);
  const router = useRouter();

  React.useEffect(() => {
    if (!userInfo) {
      router.push('/');
    }
  }, [router, userInfo]);

  const handleCancel = () => {
    setIsCancel(false);
    if (projectCurrent?.serviceId != '' && indexProject >= 0) {
      const data: dataCancelProject = {
        UserId: '',
        zipcode: projectCurrent?.zipcode ? projectCurrent?.zipcode : '',
        categoryId: projectCurrent?.serviceId ? projectCurrent?.serviceId : '',
      };
      CancelProject(data)
        .then(() => {
          const projectNew = [
            ...projects.slice(0, indexProject),
            ...projects.slice(indexProject + 1),
          ];
          setProjects(projectNew);
          ui.alertSuccess('Cancel project successfully!');
        })
        .catch(() => ui.alertFailed('Cancel the failed project!'));
    }
  };
  const handleOpenModalCancel = (project: dataProject, index: number) => {
    setProjectCurrent(project);
    setIndexProject(index);
    setIsCancel(true);
  };
  const handleCloseModalCancel = () => {
    setProjectCurrent({
      serviceId: '',
      serviceName: '',
      total: 0,
      zipcode: '',
      image: '',
    });
    setIsCancel(false);
  };

  React.useEffect(() => {
    if (router.isReady) {
      if (userInfo) {
        GetProjects({
          UserId: '',
          limit: '3',
          offset: (page > 0 ? (page - 1) * 3 : page * 3).toString(),
        })
          .then((res) => {
            const { result, pagination }: any = res;

            setTotal(pagination.total);
            // setLimit(pagination.limit);
            // setPage(pagination.offset + 1);
            setProjects(result);
            // console.log(data);
          })
          .catch((error: any) => ui.alertFailed(error));
      }
    }
  }, [router.isReady, page, userInfo]);

  return (
    <Layout>
      <Seo templateTitle='my project' />

      <main>
        <section className=''>
          <div className='flex justify-center py-20'>
            <div className='min-h-[520px] mt-16 w-[500px] md:w-[630px]'>
              <h2 className='font-bold text-[24px]'>My project</h2>
              <div className='listItem pt-4'>
                {projects?.length > 0 &&
                  projects.map((project: dataProject, index) => (
                    <div
                      className='border-b-[#E6E6E6] border-b-[1.5px] flex items-center justify-between py-6'
                      key={index}
                    >
                      <div className='flex items-center'>
                        <div
                          className='img'
                          onClick={() => {
                            router.push(
                              `/my-projects/manage-request/PENDING?zipcode=${project.zipcode}&serviceId=${project.serviceId}`
                            );
                          }}
                        >
                          <Image
                            width={88}
                            height={88}
                            className='cursor-pointer rounded-[8px]'
                            src={
                              project?.image
                                ? project?.image
                                : '/images/detail-brand/logo.jpg'
                            }
                            alt='logo'
                          />
                        </div>
                        <div className='mx-6 text'>
                          <p
                            className='cursor-pointer font-bold m-0 text-[16px]'
                            onClick={() =>
                              router.push(
                                `/my-projects/manage-request/PENDING?zipcode=${project.zipcode}&serviceId=${project.serviceId}`
                              )
                            }
                          >
                            {project.serviceName}
                          </p>
                          <p className='font-medium m-0 text-[#999999] text-[14px]'>
                            Zipcode: {project.zipcode}
                          </p>
                          <p className='font-medium m-0 text-[#999999] text-[14px]'>
                            Total number of requests: {project.total}
                          </p>
                        </div>
                      </div>
                      <div className='button'>
                        <Button
                          size='small'
                          type='button'
                          variant='outline'
                          className='duration-700 ease-in-out font-bold py-[0px] rounded-lg text-base transition hover:bg-[#c02e02] hover:text-[#FF0000]'
                          onClick={() => handleOpenModalCancel(project, index)}
                        >
                          Cancel project
                        </Button>
                      </div>
                    </div>
                  ))}
                {(projects?.length <= 0 || !projects) && (
                  <p className='font-medium mt-14 text-3xl text-center text-red-500 w-full'>
                    There is no project.
                  </p>
                )}
              </div>
              {projects?.length > 0 && (
                <div className='PageNavigation mt-10 text-right w-full'>
                  <PageNavigation
                    totalItem={total ? total : 1}
                    itemsPerPage={3}
                    page={page}
                    setPage={setPage}
                  />
                </div>
              )}
            </div>

            {isCancel && (
              <div className='bg-slate-500/50 fixed h-full left-0 modal top-0 w-full z-[100]'>
                <div className='flex h-full items-center justify-center w-full'>
                  <div className='bg-white container h-[300px] rounded-xl w-[500px]'>
                    <div className='flex img justify-center mt-10 w-full'>
                      <Image
                        src='/images/icons/alert-icon.png'
                        height={48}
                        width={48}
                        alt='alert'
                      />
                    </div>
                    <p className='font-medium mt-6 text-center text-lg w-full'>
                      Do you want to cancel the project?
                    </p>
                    <div className='flex justify-around listButton mt-14 w-full'>
                      <div className='flex justify-center w-[50%]'>
                        <Button
                          className='bg-red-500 text-lg hover:bg-red-600'
                          onClick={handleCloseModalCancel}
                        >
                          Cancel
                        </Button>
                      </div>
                      <div className='flex justify-center w-[50%]'>
                        <Button className='text-lg' onClick={handleCancel}>
                          Accept
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </Layout>
  );
}
