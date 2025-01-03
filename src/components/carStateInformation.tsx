interface CarProps {
  title: string;
  description: boolean;
  iconState?: React.ReactNode;
  className?: string;
}
export function CarStateInformation({
  title,
  description,
  iconState,
  className,
}: CarProps) {
  return (
    <div
      className={`flex items-center justify-between m-6 shadow-[0_3px_8px_rgba(0,0,0,0.24)] bg-white rounded-md w-full lg:w-80  p-6 ${className} `}
    >
      <div>
        <h1
          className={`${
            className && className.length > 0 ? "text-gray-700" : ""
          }`}
        >
          {title}
        </h1>
        <p className={description ? "text-green-500" : "text-red-500"}>
          {description ? "active" : "inactive"}
        </p>
      </div>
      <div className={description ? "text-green-500" : "text-red-500"}>
        {iconState}
      </div>
    </div>
  );
}
