import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ProductDetail from '../components/admin/ProductDetail';
import OrderDetail from '../components/admin/OrderDetail';
import UserDetail from '../components/admin/UserDetail';
import AdminDataFetch from '../components/datafetch/DataFetch';
import { useSelector } from 'react-redux';
import {Loader} from "../components/Loader"

const AdminDashboard = () => {
    const user = JSON.parse(localStorage.getItem('users'));
    const loadingStatus = useSelector(state => state.loading);

    return (
        <div>
            {!loadingStatus.loading ? (
                <div>
                    {/* Top */}
                    <div className="top mb-5 px-5 mt-5">
                        <div className=" bg-pink-50 py-5 border border-pink-100 rounded-lg">
                            <h1 className=" text-center text-2xl font-bold text-pink-500">Admin Dashboard</h1>
                        </div>
                    </div>

                    <div className="px-5">
                        {/* Mid  */}
                        <div className="mid mb-5">
                            {/* main  */}
                            <div className=" bg-pink-50 py-5 rounded-xl border border-pink-100">
                                {/* image  */}
                                <div className="flex justify-center">
                                    <img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" alt="" />
                                </div>
                                {/* text  */}
                                <div className="">
                                    <h1 className=" text-center text-lg text-black"><span className=" font-bold">Name :</span>{user && user.name}</h1>
                                    <h1 className=" text-center text-lg text-black"><span className=" font-bold">Email :</span>{user && user.email}</h1>
                                </div>
                            </div>
                        </div>

                        {/* Bottom */}
                        <div className="">
                            <Tabs>
                                <TabList className="flex flex-wrap -m-4 text-center justify-center">
                                    {/* Total Products */}
                                    <Tab className="p-4 md:w-1/3 sm:w-1/2 w-full cursor-pointer">
                                        {/* Total Products Component */}
                                    </Tab>

                                    {/* Total Order */}
                                    <Tab className="p-4 md:w-1/4 sm:w-1/2 w-full cursor-pointer">
                                        {/* Total Order Component */}
                                    </Tab>

                                    {/* Total User */}
                                    <Tab className="p-4 md:w-1/3 sm:w-1/2 w-full cursor-pointer">
                                        {/* Total User Component */}
                                    </Tab>
                                </TabList>

                                <TabPanel>
                                    <ProductDetail />
                                </TabPanel>

                                <TabPanel>
                                    <OrderDetail />
                                </TabPanel>

                                <TabPanel>
                                    <UserDetail />
                                </TabPanel>
                            </Tabs>
                        </div>
                    </div>
                </div>
            ) : (
                <Loader/>
            )}
        </div>
    );
}


export default AdminDashboard;