import { createContext, useEffect, useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'


export const jobContext = createContext();

const JobContextProvider = (props) => {

    const [jobs, setJobs] = useState([])
    const [token, setToken] = useState("")
    const navigate = useNavigate();
    const serverUrl = "https://freelanx-server.onrender.com";
    const [user, setUser] = useState(null)


    const getJobsData = async () => {
        try {
            const response = await axios.get(serverUrl + "/api/jobs/list");
            if (response.data.success) {
                setJobs(response.data.allJobs)
            }  else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const isAuthenticated = () => {
        return !!token;
    }

    useEffect(() => {
        getJobsData();
    }, [])

    useEffect(()=> {
        if (!token && localStorage.getItem("token")) {
            setToken(localStorage.getItem("token"))
        }
    }, [])

    const value = {
        jobs,
        token,
        setToken,
        navigate,
        serverUrl,
        isAuthenticated
    }

    return (
        <jobContext.Provider value={value}>
            {props.children}
        </jobContext.Provider>
    )
}

export default JobContextProvider