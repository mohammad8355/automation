// components/InfoCard.js

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

export default function InfoCard({ title, data, icon: Icon,className="bg-white" }) {
  return (
    <Card className={`w-full max-w-sm ${className} shadow-md rounded-lg overflow-hidden`}>
      <CardHeader className="flex items-center p-4">
        <Icon size={50} className="text-white " />
        <CardTitle className="ml-4 text-white text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-white">
        <p className="text-2xl font-semibold">{data}</p>
      </CardContent>
    </Card>
  );
}
