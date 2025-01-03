interface notificationCardProps {
  state: boolean;
  title: string;
  date: string;
  content: string;
}
export function NotificationCard({
  state,
  title,
  date,
  content,
}: notificationCardProps) {
  return (
    <div className="bg-white w-80 h-28 shadow-[0_3px_8px_rgba(0,0,0,0.24)] rounded-xl p-4 hover:bg-gray-50 transition-colors">
      <div className="flex justify-between items-center gap-2 mb-2">
        {state && (
          <span
            className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"
            aria-label="Nova notificação"
          />
        )}
        <h2 className="text-sm font-medium flex-grow">{title}</h2>
        <time className="text-xs text-gray-500 flex-shrink-0">{date}</time>
      </div>
      <p className="text-sm text-gray-600 whitespace-normal break-words line-clamp-2">
        {content}
      </p>
    </div>
  );
}
