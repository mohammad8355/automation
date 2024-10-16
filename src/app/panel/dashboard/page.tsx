import InfoCard from '@/components/share/InfoCard'
import { FaDollarSign, FaUsers, FaChartLine } from 'react-icons/fa';

import React from 'react'
export default function PanelPage() {
  return (
    <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
    <InfoCard
      title="درآمد"
      data="$10,000"
      className='success-card'
      icon={FaDollarSign}
    />
    <InfoCard
      title="تعداد مسافران"
      data="1,200"
      className='warning-card'
      icon={FaUsers}
    />
    <InfoCard
      title="تعداد سفر ها"
      data="150"
      className='dark-card'
      icon={FaChartLine}
    />
  </div>
  )
}

