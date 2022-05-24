
import { useQuery } from 'react-query';
import ShowUser from './ShowUser';

const Allurer = () => {
    const { data, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/users', {
        method: "GET",
        headers:{
            authorization : `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if(isLoading){
        return <p>Loading ...</p>
    }
   

    // console.log();

    // const [users, setUsers] = useState([])
    // useEffect(() => {
    //     // console.log(user.email);

    //     fetch('http://localhost:5000/users')
    //         .then(res => res.json())
    //         .then(data => setUsers(data))

    // }, [users])
    return (
        <div className='w-full  p-20'>
            <div class="">
                <table class="table">
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