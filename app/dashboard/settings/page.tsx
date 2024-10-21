"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("account")

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Settings</h2>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="tax">Tax</TabsTrigger>
          <TabsTrigger value="business">Business</TabsTrigger>
          <TabsTrigger value="reporting">Reporting</TabsTrigger>
        </TabsList>

        <TabsContent value="account" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Account Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input type="email" id="email" defaultValue="user@example.com" />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="password">New Password</Label>
                  <Input type="password" id="password" />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input type="password" id="confirm-password" />
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="2fa" />
                  <Label htmlFor="2fa">Enable Two-Factor Authentication</Label>
                </div>
                <Button>Update Account</Button>
              </form>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Delete Account</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Warning: This action is irreversible. All your data will be permanently deleted.
              </p>
              <Button variant="destructive">Delete Account</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tax" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Tax Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="tax-rate">Default Tax Rate (%)</Label>
                  <Input type="number" id="tax-rate" defaultValue="10" />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="tax-brackets">Tax Brackets</Label>
                  <Textarea 
                    id="tax-brackets" 
                    placeholder="0-18200:0%, 18201-45000:19%, 45001-120000:32.5%, 120001-180000:37%, 180001+:45%"
                  />
                  <p className="text-sm text-muted-foreground mt-1">
                    Enter tax brackets in the format: income range:rate%, separated by commas
                  </p>
                </div>
                <Button>Update Tax Settings</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="business" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Business Specific Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="depreciation-method">Depreciation Method</Label>
                  <Select>
                    <SelectTrigger id="depreciation-method">
                      <SelectValue placeholder="Select depreciation method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="straight-line">Straight Line</SelectItem>
                      <SelectItem value="declining-balance">Declining Balance</SelectItem>
                      <SelectItem value="sum-of-years-digits">Sum of Years&apos; Digits</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="business-deductions">Common Business Deductions</Label>
                  <Textarea 
                    id="business-deductions" 
                    placeholder="Rent, Utilities, Office Supplies, etc."
                  />
                  <p className="text-sm text-muted-foreground mt-1">
                    Enter common business deductions, separated by commas
                  </p>
                </div>
                <Button>Save Business Settings</Button>
              </form>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Upload Business Data</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="csv-upload">Upload CSV File</Label>
                  <Input type="file" id="csv-upload" accept=".csv" />
                </div>
                <Button>Upload and Process CSV</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reporting" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Reporting Options</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Switch id="profit-loss-report" />
                  <Label htmlFor="profit-loss-report">Generate Profit and Loss Report</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="gst-summary-report" />
                  <Label htmlFor="gst-summary-report">Generate GST Summary Report</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="auto-generate-reports" />
                  <Label htmlFor="auto-generate-reports">Automatically Generate Reports Monthly</Label>
                </div>
                <Button>Generate Reports Now</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
