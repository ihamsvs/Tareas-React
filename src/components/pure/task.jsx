import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class'
import 'bootstrap/dist/css/bootstrap.min.css';


//Importamos la hoja de estilos de task.scss
import '../../styles/task.scss'
import { LEVELS } from '../../models/levels.enum';


const TaskComponent = ({Task}) => {

    useEffect(() => {
        console.log('created task')
        return () => {
            console.log(`Task: ${Task.name} is going to `)
        };
    }, [Task]);

    //Function that returns a badge
    //depending on the level of the task

    function taskLevelBadge(){
        switch (Task.level) {
            case LEVELS.NORMAL:
                return(<h6 className='mb-0'>
                    <span className='bi bi-cloud-drizzle-fill'>{Task.level}</span>
                </h6>)
                break;
            case LEVELS.URGENTE:
                return(<h6 className='mb-0'>
                    <span className='bi bi-clouds-fill bg-warning'>{Task.level}</span>
                </h6>)
                break;    
            case LEVELS.BLOQUEANTE:
                return(<h6 className='mb-0'>
                    <span className='bi bi-cloud-moon-fill bg-danger'>{Task.level}</span>
                </h6>)
                break;
            default:
                break;
        }
    }
    /**
     * 
     * @returns Function that returns of depending 
     */

    function taskIconCompleted(){
        if(Task.completed){
            return(<i className='bi bi-check2-circle' style={{color: 'green', fontWeight:'bold'}}></i>)    
        }else{
            return(<i className='bi bi-emoji-angry-fill' style={{color: 'red', fontWeight:'bold'}}></i>)
        }
    }

    return (
        
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{Task.name}</span>
            </th>
            <td className='align-middle'>
                <span className='ms-2'>{Task.description}</span>
            </td>
            <td className='align-middle'>
                {/*EXECUTION OF FUNCTION TO RETURN BADGE ELEMENT */}
                {taskLevelBadge()}
            </td>
            <td className='align-middle'>
                {/* TODO SUSTITUIR POR ICONOS */}
                {taskIconCompleted()}
                <i className='bi bi-trash-fill' style={{color: 'tomato',}}></i>
            </td>

        </tr>

        
        
        
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task) //Con esto decimos que es una clase
};


export default TaskComponent;


