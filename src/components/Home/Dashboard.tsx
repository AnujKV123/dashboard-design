import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Pie, PieChart, CartesianGrid, Line, LineChart, Bar, BarChart, XAxis, YAxis  } from "recharts";

import {
  Card,
  CardContent,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"


import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import type { GeographyType } from "react-simple-maps";
import { Separator } from "@/components/ui/separator";

import { TrendingDown, TrendingUp } from "lucide-react";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { type CombinedData } from "@/types/types";


export const Dashboard = () => {

  const [dashBoardData, setDashBoardData] = useState<CombinedData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try{
        const res = await fetch("dashboardData.json");
        const data: CombinedData = await res.json();
        console.log(data);
        setDashBoardData(data);
      }
      catch(err){
        console.log(err);
        if(err instanceof Error){
          setError(err.message);
        }
      }
      finally{
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  if(isLoading){
    return <div>Loading...</div>
  }

  if(error){
    return <div>{error}</div>
  }


  return (
    <div className='w-full h-[970px] gap-[28px] flex flex-col p-[14px]'>
        <div className='flex flex-row gap-[28px] w-full h-[252px]'>
            <div className='flex flex-row gap-[28px] flex-wrap w-[50%]'>
                <div className='w-[47%] h[112px] rounded-3xl text-center dark:text-primary-foreground bg-[var(--dashboard-card1)]'>
                  <div className="flex flex-col p-5">
                    <div>
                      <h3 className="font-medium text-left">Customers</h3>
                    </div>
                    <div className='flex flex-row justify-between items-center mt-3'>
                        <h2 className="text-2xl font-medium">3781</h2>
                        <div className="flex flex-row gap-2">
                          <span className="m-0 p-0 flex">
                            +11.01%
                          </span>
                          <Button variant="ghost" size="icon" className="size-7 -ml-1">
                            <TrendingUp />
                          </Button>
                          </div>
                    </div>
                  </div>
                </div>
                <div className='w-[46%] h[112px] rounded-3xl text-center bg-[var(--dashboard-card2)]'>
                  <div className="flex flex-col p-5">
                    <div>
                      <h3 className="font-medium text-left">Orders</h3>
                    </div>
                    <div className='flex flex-row justify-between items-center mt-3'>
                        <h2 className="text-2xl font-medium">1,219</h2>
                        <div className="flex flex-row gap-2">
                          <span className="m-0 p-0 flex">
                            -0.03%
                          </span>
                          <Button variant="ghost" size="icon" className="size-7 -ml-1">
                            <TrendingDown />
                          </Button>
                          </div>
                    </div>
                  </div>
                </div>
                <div className='w-[46%] h[112px] rounded-3xl text-center bg-[var(--dashboard-card2)]'>
                  <div className="flex flex-col p-5">
                    <div>
                      <h3 className="font-medium text-left">Revenue</h3>
                    </div>
                    <div className='flex flex-row justify-between items-center mt-3'>
                        <h2 className="text-2xl font-medium">$695</h2>
                        <div className="flex flex-row gap-2">
                          <span className="m-0 p-0 flex">
                            +15.03%
                          </span>
                          <Button variant="ghost" size="icon" className="size-7 -ml-1">
                            <TrendingUp />
                          </Button>
                          </div>
                    </div>
                  </div>
                </div>
                <div className='w-[46%] h[112px] rounded-3xl text-center dark:text-primary-foreground bg-[var(--dashboard-card3)]'>
                  <div className="flex flex-col p-5">
                    <div>
                      <h3 className="font-medium text-left">Growth</h3>
                    </div>
                    <div className='flex flex-row justify-between items-center mt-3'>
                        <h2 className="text-2xl font-medium">30.1%</h2>
                        <div className="flex flex-row gap-2">
                          <span className="m-0 p-0 flex">
                            +6.08%
                          </span>
                          <Button variant="ghost" size="icon" className="size-7 -ml-1">
                            <TrendingUp />
                          </Button>
                          </div>
                    </div>
                  </div>
                </div>
            </div>
            <div className='w-[50%]'>
                <Card className='h-[252px]'>
                    <CardContent>
                        <div className='text-left'>
                            <h3>Projections vs Actuals</h3>
                        </div>
                        <div>
                            <ChartContainer config={dashBoardData?.barChart.config || {}} className="h-[168px] w-full">
                                <BarChart accessibilityLayer data={dashBoardData?.barChart.data} barCategoryGap="30%">
                                    <CartesianGrid vertical={false} />
                                    <XAxis
                                    dataKey="month"
                                    tickLine={false}
                                    tickMargin={10}
                                    axisLine={false}
                                    tickFormatter={(value) => value.slice(0, 3)}
                                    />
                                    <YAxis
                                      tickLine={false}
                                      axisLine={false}
                                      domain={[0, 30000000]} 
                                      ticks={[0, 10000000, 20000000, 30000000]}
                                      tickFormatter={(value) => `${value / 1000000}M`}
                                    />
                                    <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                                    <Bar
                                    dataKey="current"
                                    stackId="a"
                                    fill="var(--color-current)"
                                    radius={[0, 0, 4, 4]}
                                    widths={20}
                                    />
                                    <Bar
                                    width={20}
                                    dataKey="previous"
                                    stackId="a"
                                    fill="var(--color-previous)"
                                    radius={[4, 4, 0, 0]}
                                    widths={20}
                                    />
                                </BarChart>
                            </ChartContainer>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
        <div className='flex flex-row gap-[28px] w-full h-[318px]'>
            <div className='w-[75%]'>
                <Card className='h-[318px]'>
                    <CardContent>
                        <div className="flex flex-row gap-5 mb-5">
                            <h2 className="font-bold">Revenue</h2>
                            <Separator
                                orientation="vertical"
                                className="mr-2 data-[orientation=vertical]:h-4"
                            />
                            <div className="flex flex-row">
                              <div> 
                                <span className="inline-block h-2 w-2 rounded-full mr-2" style={{ backgroundColor: "var(--Primary-Brand, hsla(0, 0%, 11%, 1))" }}></span>
                              </div>
                              <div className="flex flex-row gap-2">
                                <span>Current Week</span>
                                <span className="font-medium">$58,211</span>
                              </div>
                            </div>
                            <div className="flex flex-row">
                              <div>
                                <span className="inline-block h-2 w-2 rounded-full mr-2" style={{ backgroundColor: "var(--Secondary-Cyan, hsla(205, 40%, 76%, 1))" }}></span>
                              </div>
                              <div className="flex flex-row gap-2">
                                <span>Pervious Week</span>
                                <span className="font-medium">$68,768</span>
                              </div>
                            </div>
                        </div>
                        <div>
                            <ChartContainer className="h-[232px] w-full" config={dashBoardData?.lineChart.config || {}}>
                                <LineChart
                                    accessibilityLayer
                                    data={dashBoardData?.lineChart.data}
                                    margin={{
                                    left: 12,
                                    right: 12,
                                    }}
                                >
                                    <CartesianGrid vertical={false} />
                                    <XAxis
                                    dataKey="month"
                                    tickLine={false}
                                    axisLine={false}
                                    tickMargin={8}
                                    tickFormatter={(value) => value.slice(0, 3)}
                                    />
                                    <YAxis
                                      tickLine={false}
                                      axisLine={false}
                                      ticks={[0, 10000000, 20000000, 30000000]} // values in raw numbers
                                      tickFormatter={(value) => `${value / 1000000}M`} // format -> 0M, 10M, etc.
                                    />
                                    <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                                    <Line
                                    dataKey="current"
                                    type="monotone"
                                    stroke="var(--color-current)"
                                    strokeWidth={2}
                                    dot={false}
                                    />
                                    <Line
                                    dataKey="previous"
                                    type="monotone"
                                    stroke="var(--color-previous)"
                                    strokeWidth={2}
                                    dot={false}
                                    />
                                </LineChart>
                            </ChartContainer>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div className='w-[25%]'>
                <Card className='h-[318px]'>
                    <CardContent>
                        <div className="text-left">
                            <h3>Revenue by Location</h3>
                        </div>
                        <div>
                            <div >
                                <ComposableMap projectionConfig={{
                                      scale: 180,
                                      center: [20, 28],
                                      translate: [10, 15],
                                    }}
                                    className="w-full h-[88px]"
                                    >
                                    <Geographies geography="/features.json" >
                                    {({ geographies }: { geographies: GeographyType[] }) =>
                                        geographies.map((geo: GeographyType) => (
                                        <Geography key={geo.rsmKey} geography={geo} 
                                        // @ts-ignore
                                        style={{
                                          default: {
                                            fill: "var(--Secondary-Cyan, hsla(205, 40%, 76%, 1))",
                                            outline: "none",
                                          },
                                          hover: {
                                            fill: "var(--Secondary-Indigo, hsla(231, 94%, 79%, 1))",
                                            outline: "none",
                                          },
                                          pressed: {
                                            fill: "var(--Secondary-Indigo, hsla(231, 94%, 79%, 1))",
                                            outline: "none",
                                          },
                                        }} 
                                        />
                                      ))
                                    }
                                    </Geographies>
                                    {dashBoardData?.markers.map(({ name, coordinates }) => (
                                      <Marker key={name} coordinates={coordinates}>
                                        <circle r={13} fill="var(--Primary-Brand, hsla(0, 0%, 11%, 1));" stroke="#fff" strokeWidth={1} />
                                      </Marker>
                                    ))}
                                </ComposableMap>
                                <div>
                                  <div className="space-y-4">
                                    {dashBoardData?.cityStats.map((city) => {
                                      const percent = (city.value / city.max) * 100;
                                      return (
                                        <div key={city.name} className="space-y-1">
                                          {/* Row with name + value */}
                                          <div className="flex justify-between text-sm">
                                            <span>{city.name}</span>
                                            <span>{(city.value / 1000).toFixed(0)}K</span>
                                          </div>
                                          {/* Progress line */}
                                          <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                                            <div
                                              className="h-1"
                                              style={{ width: `${percent}%`, backgroundColor:"var(--Secondary-Cyan, hsla(205, 40%, 76%, 1))" }}
                                            />
                                          </div>
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
        <div className='flex flex-row gap-[28px] w-full h-[336px]'>
            <div className='w-[75%]'>
                <Card className='h-[344px]'>
                    <CardContent>
                        <div className='text-left'>
                            <h3>Top Selling Products</h3>
                        </div>
                        <div className="mt-4">
                            <Table>
                                <TableHeader>
                                    <TableRow className="text-left ">
                                    <TableHead className="text-neutral-400">Name</TableHead>
                                    <TableHead className="text-neutral-400">Price</TableHead>
                                    <TableHead className="text-neutral-400">Quantity</TableHead>
                                    <TableHead className="text-neutral-400">Amount</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody className="text-left">
                                    {dashBoardData?.invoices.map((invoice) => (
                                    <TableRow className="border-b-0" key={invoice.name}>
                                        <TableCell>{invoice.name}</TableCell>
                                        <TableCell>{invoice.price}</TableCell>
                                        <TableCell>{invoice.quantity}</TableCell>
                                        <TableCell>{invoice.amount}</TableCell>
                                    </TableRow>
                                    ))}
                                </TableBody>
                                </Table>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div className='w-[25%]'>
                <Card className='h-[344px]'>
                    <CardContent>
                        <div className='text-left'>
                            <h3>Total Sales</h3>
                        </div>
                        {/* <div> */}
                            <ChartContainer
                                config={dashBoardData?.pieChart.config || {}}
                                className="mx-auto aspect-square max-h-[250px]"
                                >
                                <PieChart>
                                    <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent hideLabel />}
                                    />
                                    <Pie
                                    data={dashBoardData?.pieChart.data}
                                    dataKey="value"
                                    nameKey="name"
                                    innerRadius={40}
                                    outerRadius={60}
                                    paddingAngle={5}
                                    // cornerRadius={50}
                                    />
                                </PieChart>
                            </ChartContainer>
                            <div className="space-y-2 text-sm">
                            {dashBoardData?.pieChart.data.map((entry) => (
                                <div key={entry.name} className="flex items-center justify-between">
                                    <div>
                                        <span
                                            className="inline-block h-2 w-2 rounded-full mr-2"
                                            style={{ backgroundColor: entry.fill }}
                                        ></span>
                                        <span className="">{entry.name}</span>
                                    </div>
                                    <span className="">${entry.value}</span>
                                </div>
                            ))}
                            </div>
                        {/* </div> */}
                    </CardContent>
                </Card>
            </div>
        </div>
    </div>
  )
}
