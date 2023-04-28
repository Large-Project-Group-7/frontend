import { Banner } from '../component/Banner';
import ForegroundBox from '../component/mobile_exclusives/ForegroundBox';
import PerBookBox from '../component/mobile_exclusives/PerBookBox';
import style from '../styles/Home.module.css';
import UserList from '../component/UserList';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import useCheckMobileScreen from '../component/mobile_exclusives/CheckMobile';

export const SearchBook = (props) => {
    const isMobile = useCheckMobileScreen();
    const [data, setData] = useState([]);
    const [loadingData, setLoadingData] = useState(true);
    const [input, setInput] = useState(props?.value ?? '');
    const { userID } = useParams();
    
    const [users, setUsers] = useState([])

    useEffect(() => {
        async function getUsers() {
            const response = await fetch(`http://localhost:3001/users`)
            const data = await response.json();
            setUsers(data);
        }

        getUsers();

        
    })

    const handleChange = (event) => {
        //setLoadingData (true);
        setInput(event.target.value);
        fetch(`http://localhost:3001/books/${input}`)
        .then(res => res.json()).then((result) => {
            setData(result);
            setLoadingData (false);
         })
      };


    if(!isMobile)
    {
        return (
        <div className={style.test}>
            <Banner userID={userID}/>
            <UserList count={users.length} users={users}/>
        </div>
    )}

    let containers = []
    for (let i = 0; i < data.length; i++){ // change to constant (5?) when searching is implemented
        //console.log(loadingData1,loadingData2,loadingData3,loadingData4,loadingData5);
        const content = (loadingData) ? '...loading' : <PerBookBox book = {data[i]}/>;
        containers.push(
        <>
            <div className={style['break']}></div>
            {content}
        </>
        )
    }
    return (
        <div>
            <Banner  {...props}/>
            
            <ForegroundBox>
                <Link to='/SearchUser'>
                    <button className='sort'> 
                        Sort
                    </button>
                </Link>
                <input className='search-bar' placeholder='Search by: Book Name' onChange={handleChange}/>
                <div className='container'>{containers}</div>
            </ForegroundBox>
            <style jsx='true'>{`
            .search-bar {
                margin-top: 21px;
                margin-bottom: -2px;
                width: 240px;
                height: 60px;
                margin-left: calc(50% - 92px);
                font-size: 18px;
                position: absolute;
                top: 56px;
                right: 12%;
                z-index: 2;
            }

            .search-bar::placeholder {
                font-size: 18px;
            }

            .sort {
                position: absolute;
                width: 48px;
                height: 48px;
                top: 84px;
                left: 9%;
                z-index: 2;
            }
            .container {
                margin-top: 100px;
            }
            `}
            </style>
        </div>
    )
}