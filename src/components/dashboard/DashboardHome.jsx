import { useAuth } from "@/hooks/AuthProvider";
import { useState, useEffect, useCallback } from "react";
import { WashingMachine, Weight, Banknote, ListCheck, Clock } from 'lucide-react';
import { fetchUserStats } from "@/services/query";
import { currencyFormat } from "@/helpers/currencyFormat";
import { Link } from "react-router-dom";
import { dateFormat } from "@/helpers/dateFormat";

const DashboardHome = () => {
  const auth = useAuth();

  const defaultUserStats = {
      "basic_stats": [
        {
          id: "laundry_requests_count",
          title: "Laundry Requests",
          value: 0,
          icon: (
              <div className="rounded-full p-3 flex items-center justify-center bg-blue-50">
                <WashingMachine className="h-5 w-5 text-blue-500" />
              </div>
          )
        },
        {
          id: "total_completed",
          title: "Total Completed",
          value: 0,
          icon: (
              <div className="rounded-full p-3 flex items-center justify-center bg-purple-50">
                <ListCheck className="h-5 w-5 text-purple-500" />
              </div>
          )
        },
        {
          id: "total_price",
          title: "Total Spent",
          value: currencyFormat(0),
          icon: (
              <div className="rounded-full p-3 flex items-center justify-center bg-green-50">
                <Banknote className="h-5 w-5 text-green-500" />
              </div>
          )
        },
        {
          id: "total_weight",
          title: "Total Weight",
          value: `${0}kg`,
          icon: (
              <div className="rounded-full p-3 flex items-center justify-center bg-red-50">
                <Weight className="h-5 w-5 text-red-500" />
              </div>
          )
        }
      ],
      "latest_requests": []
    }

  const [userStats, setUserStats] = useState(defaultUserStats);
  const [isLoadingUserStats, setIsLoadingUserStats] = useState(true);

  const loadUserStats = useCallback(async () => {
    try {
        const data = await fetchUserStats()
        if (!data) {
            throw new Error("Error loading laundry data")
        }
        const { latest_requests, laundry_requests_count, total_completed, total_price, total_weight } = data.statistics
        
        setUserStats((prevStats) => ({
          ...prevStats,
          basic_stats: prevStats.basic_stats.map(stat => {
            if (stat.id === "laundry_requests_count") {
              return { ...stat, value: laundry_requests_count };
            } else if (stat.id === "total_completed") {
              return { ...stat, value: total_completed };
            } else if (stat.id === "total_price") {
              return { ...stat, value: currencyFormat(total_price) };
            } else if (stat.id === "total_weight") {
              return { ...stat, value: `${total_weight}kg` };
            }
            return stat;
          }),
          latest_requests: latest_requests.map(request => {
            return {
              id: request.id,
              weight: request.weight,
              laundry_type: request.laundry_type,
              notes: request.notes,
              current_status: request.current_status,
              completion_date: request.completion_date,
              total_price: currencyFormat(request.total_price)
            }
          })
        }));

    } catch (error) {
        console.error(error)
    } finally {
        setIsLoadingUserStats(false)
    }
  }, [])

  useEffect(() => {
    if (auth?.user?.role === "user") {
      loadUserStats();
    }  
  }, [auth.user.role, loadUserStats])

  return (
    <>
      {auth.user.role === "user" ? (
         <>
            {isLoadingUserStats ? (
              <div className="flex items-center justify-center h-20 text-gray-500">Loading...</div>
            ) : (
              <div className="flex flex-col gap-4 w-full">
                <div className="w-full grid grid-cols-4 gap-4">
                  {userStats.basic_stats.map((stat, index) => (
                    <div key={`stat-${index}`} className="col-span-4 md:col-span-1 rounded-md border border-gray-200 p-5 flex items-center gap-4 bg-white">
                      {stat.icon}
                      <div>
                        <h3 className="text-sm tracking-tight text-gray-500">{stat.title}</h3>
                        <p className="text-lg tracking-wider text-gray-900">{stat.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
                  <div className="rounded-md border border-gray-200 p-5 bg-white w-full flex flex-col space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-gray-500" />
                        <h3 className="text-sm tracking-tight ">Latest Requests</h3>
                      </div>
                      <Link to={"/dashboard/user/view-orders"} className="text-sm p-2 rounded-lg border border-gray-200">
                        See All
                      </Link>
                    </div>
                    <hr className="w-full h-1 text-gray-200" />
                    <div className="w-full flex flex-col gap-4">
                      {userStats.latest_requests.map((request, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-md">
                          <div className="flex w-full flex-col md:flex-row items-start md:items-center gap-2">
                            <div className="flex items-center justify-between w-full md:w-auto">
                              <div className="rounded-full p-3 flex items-center justify-center bg-blue-50">
                                <WashingMachine className="h-5 w-5 text-blue-500" />
                              </div>
                              <span 
                                className={`
                                    capitalize md:hidden block text-xs p-3 rounded-md 
                                    ${request.current_status === "completed" 
                                        ? "bg-green-100 text-green-700" :
                                    request.current_status === "pending" 
                                        ? "bg-gray-100 text-gray-700" : 
                                    request.current_status === "processed" 
                                        ? "bg-blue-50 text-blue-700" : "bg-red-100 text-red-700"}`}>
                                {request.current_status}
                              </span>
                            </div>
                            <div className="flex flex-col gap-1">
                              <h3 className="text-xs tracking-tight text-gray-500">{request.id}</h3>
                              <p className="text-sm tracking-wider text-gray-900 flex items-center gap-2">
                                {request.total_price} <div className="rounded-full bg-gray-300 h-1.5 w-1.5"/>
                                <span className="tracking-tight text-gray-500">{dateFormat(request.completion_date)}</span>
                              </p>
                            </div>
                          </div>
                          <span 
                            className={`
                                capitalize hidden md:block text-xs p-3 rounded-md 
                                ${request.current_status === "completed" 
                                    ? "bg-green-100 text-green-700" :
                                request.current_status === "pending" 
                                    ? "bg-gray-100 text-gray-700" : 
                                request.current_status === "processed" 
                                    ? "bg-blue-50 text-blue-700" : "bg-red-100 text-red-700"}`}>
                            {request.current_status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
              </div>
            )}
          </>
      ) : (
        <div>asdasd</div>
      )}
    </>
  );
};

export default DashboardHome;
