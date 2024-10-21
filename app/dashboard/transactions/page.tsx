import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function Transactions() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Transactions</h1>
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Transaction ID</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Category</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>TR-2098</TableCell>
                <TableCell>Office Supplies</TableCell>
                <TableCell>$250.00</TableCell>
                <TableCell>2024-03-14</TableCell>
                <TableCell>Business Expense</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>TR-2097</TableCell>
                <TableCell>Client Payment</TableCell>
                <TableCell>$1,500.00</TableCell>
                <TableCell>2024-03-13</TableCell>
                <TableCell>Income</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>TR-2096</TableCell>
                <TableCell>Software Subscription</TableCell>
                <TableCell>$49.99</TableCell>
                <TableCell>2024-03-12</TableCell>
                <TableCell>Recurring Expense</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

