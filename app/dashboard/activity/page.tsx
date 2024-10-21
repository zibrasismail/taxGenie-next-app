import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Activity() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Activity</h1>
      <Card>
        <CardHeader>
          <CardTitle>Recent Activities</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li>Filed 2023 tax return - 2 days ago</li>
            <li>Updated business expenses - 1 week ago</li>
            <li>Reviewed tax deductions - 2 weeks ago</li>
            <li>Scheduled appointment with tax advisor - 3 weeks ago</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
