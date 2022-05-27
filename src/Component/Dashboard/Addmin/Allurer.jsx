
import { useQuery } from 'react-query';
import ShowUser from './ShowUser';

const Allurer = () => {
    const { data, isLoading, refetch } = useQuery('users', () => fetch('https://enigmatic-dawn-06088.herokuapp.com/users', {
        method: "GET",
        headers:{
            authorization : `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if(isLoading){
        return <p>Loading ...</p>
    }
   

    return (
        <div className='w-full  p-20'>
            <div className="">
                <table className="table">
                    <thead>
                        <tr>
                            {/* <th>SL</th> */}
                            <th className='text-xl font-bold'>EMAIL</th>
                            <th className='text-xl font-bold'>ADMIN BUTTON</th>
                            <th className='text-xl font-bold'>REMOVE BUTTON</th>
                            
                        </tr>
                    </thead>

                    <tbody>
                        {
                        data?.map(user => <ShowUser
                        key={user._id}
                        user={user}
                        refetch={refetch}
                        ></ShowUser>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
)};

export default Allurer;