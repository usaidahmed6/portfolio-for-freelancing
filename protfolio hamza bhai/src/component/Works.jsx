import React, { useEffect, useState } from 'react'
import '../style/work.css'
import { Image } from 'antd';
import { collection, db, getDocs, onSnapshot, workRef } from './Firebase'
import loader from '../images/loading2.gif'


const Works = () => {
    const [work, setWork] = useState([false]);
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        setLoading(true)

        setTimeout(() => {
            setLoading(false)

        }, 4000)

        onSnapshot(
            collection(db, "work"),
            (snapshot) => {
                getWork()

            },
            (error) => {
                alert(error)
            });

    }, [])

    const getWork = async () => {
        setLoading(true)
        const querySnapshot = await getDocs(workRef);
        let products = []
        querySnapshot.forEach((doc) => {
            products.push({ id: doc.id, ...doc.data() })
        });
        setWork(products);
        // console.log(products[0].image);

        setTimeout(() => {
            setLoading(false)

        }, 4000)
    }


    return (
        <>
            <div className="workContainer" id='MyWorks'>
                {
                    loading ?
                        <div className="loader-container">
                            <img src={loader} alt="" />
                        </div>
                        :
                        <>
                            <h2 className='Heading my-6'>Featured Works</h2>

                            <div className="work-image-container ">
                                {
                                    work.map((data, index) => {
                                        return (
                                            <div key={index}>
                                                <Image src={data.image} alt="image" className='work-images' style={{ width: '22em', height: '18em' }} />

                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </>
                }
            </div>


        </>
    )
}

export default Works
