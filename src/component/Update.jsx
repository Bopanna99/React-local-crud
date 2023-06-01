import React,{useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { readSingleTask, updateTask } from "../data/task";

function Update(){
    const [task,setTask] = useState({
        title : '',
        start : '',
        end : '',
        desc : ''
    });

    const params = useParams()
    console.log('id=',params.id);

    useEffect(()=>{
        const data = readSingleTask(params.id)
        setTask(data);
    },[])

    const readValue = (event) =>{
        const {name, value } = event.target
        console.log('name =',name, "value =", value);
        setTask({...task, [name]:value})
    }
    const submitHandler = async(event) =>{
        event.preventDefault();
        console.log('new task =', task);
        updateTask(params.id,task)
    }
     
    return(
        <div>
            <div className="container">
            
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card mb-3">
                        <div className="card-body">
                            <form autoComplete="off" onSubmit={submitHandler} >
                               <div className="form-group mt-2">
                                <label htmlFor="title">Task Titler</label>
                                <input type="text" name="title" id="title" value={task.title} onChange={readValue} className="form-control" required />
                                </div>
                                <div className="form-group mt-2">
                                  <label htmlFor="start">Task start Date</label>
                                  <input type="datetime-local" name="start" id="start" value={task.start} onChange={readValue} className="form-control" required />
                                </div>
                                <div className="form-group mt-2">
                                  <label htmlFor="end">Task End Date</label>
                                  <input type="datetime-local" name="end" id="end" onChange={readValue} value={task.end} className="form-control" required />
                                </div>
                                <div className="form-group mt-2">
                                  <label htmlFor="desc">Description</label>
                                  <textarea name="desc" id="desc" cols={30} rows={5} onChange={readValue} value={task.desc} className="form-control" required></textarea>
                                </div>
                                <div className="form-group mt-2">
                                    <input type="submit" className="btn btn-success" value={"Update Task"} />
                                </div>
                             </form>
                        </div>
                    </div>
                </div>
            </div>
           </div>
        </div>
    )
}
export default Update