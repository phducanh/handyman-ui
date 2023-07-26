import clsx from 'clsx';
const enum Colors {
  green = 'green',
  blue = 'blue',
  red = 'red',
  yellow = 'yellow',
}

export default function Tag({
  className,
  color,
  children,
}: {
  className?: string;
  color?: string;
  children?: React.ReactNode;
}) {
  const getColorClass = () => {
    switch (color) {
      case Colors.green:
        return 'bg-[#4FBF67]';
      case Colors.blue:
        return 'bg-[#3864FF]';
      case Colors.red:
        return 'bg-[#E01F3D]';
      case Colors.yellow:
      default:
        return 'bg-[#FF8413]';
    }
  };
  return (
    <div
      className={clsx(
        className,
        'font-medium px-[8px] py-[4px] rounded-lg text-base text-center text-white',
        getColorClass()
      )}
    >
      {children}
    </div>
  );
}
