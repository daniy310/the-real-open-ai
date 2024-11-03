import React from 'react';
import { LucideIcon } from 'lucide-react';

interface TimelineItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
  isLast?: boolean;
}

function TimelineItem({ icon: Icon, title, description, isLast }: TimelineItemProps) {
  return (
    <div className="relative pb-8">
      {!isLast && (
        <span
          className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200 dark:bg-gray-700"
          aria-hidden="true"
        />
      )}
      <div className="relative flex space-x-3">
        <div>
          <span className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center ring-8 ring-white dark:ring-gray-800">
            <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          </span>
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">{title}</h3>
          <p className="mt-2 text-base text-gray-500 dark:text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TimelineItem;