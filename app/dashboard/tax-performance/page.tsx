import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TaxPerformance() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Tax Performance</h1>
      <Card>
        <CardHeader>
          <CardTitle>Tax Performance Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Here you can view detailed information about your tax performance, including:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>Annual tax summaries</li>
            <li>Tax rate comparisons</li>
            <li>Deduction effectiveness</li>
            <li>Tax saving opportunities</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

