import React from 'react';
import { LucideIcon } from 'lucide-react';

interface InfoCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

function InfoCard({ title, description, icon: Icon }: InfoCardProps) {
  return (
    <div className="relative p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex flex-col items-center text-center">
        <div className="flex-shrink-0 mb-2">
          <Icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
        </div>
        <div className="group relative">
          <h3 className="text-sm font-medium text-gray-900 dark:text-white">{title}</h3>
          <div className="absolute left-1/2 bottom-full -translate-x-1/2 mb-2 w-48 p-2 bg-gray-900 dark:bg-gray-700 text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
            {description}
            <div className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-1/2 border-8 border-transparent border-t-gray-900 dark:border-t-gray-700"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;