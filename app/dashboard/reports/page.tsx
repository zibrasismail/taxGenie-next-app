import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Reports() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Reports</h1>
      <Card>
        <CardHeader>
          <CardTitle>Available Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            <li className="flex items-center justify-between">
              <span>Annual Tax Summary</span>
              <Button variant="outline">Generate</Button>
            </li>
            <li className="flex items-center justify-between">
              <span>Quarterly Expense Report</span>
              <Button variant="outline">Generate</Button>
            </li>
            <li className="flex items-center justify-between">
              <span>Deductions Overview</span>
              <Button variant="outline">Generate</Button>
            </li>
            <li className="flex items-center justify-between">
              <span>Income Statement</span>
              <Button variant="outline">Generate</Button>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

