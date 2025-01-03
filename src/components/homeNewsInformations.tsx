interface informationsProps {
  description: string;
  state: string;
}
export function HomeNewsInformations({
  description,
  state,
}: informationsProps) {
  return (
    <div className="flex justify-between">
      <p>{description}</p>
      <p className="text-blue-500">{state}</p>
    </div>
  );
}
