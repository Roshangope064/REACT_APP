
import propType from 'prop-types';
export default function Heading({data}){
    return(
        <>
        <h1>{data.fname} {data.lname} {data.course}</h1>
        </>
    ); 
}
Heading.prototype = {
    data:{
        fname:propType.string,
        lname:propType.string,
        course:propType.string
    }      
}
Heading.defaultProps = {
    data:{
        fname:"Name",
        lname:"Surname",
        Course:"Course"
    }
}