import React , { useEffect}from 'react'

const Cat = ({value}) => { 
  useEffect (() => { 
    console.log("cat got mounted"); 

    return () => { 
      console.log("cat got unmounted");
    };
  }, [value]); 

  return (
    <div> 
    <img
    alt='cat_img'
    src="https://as2.ftcdn.net/v2/jpg/02/66/72/41/1000_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg"
    />
    <h1>{value}</h1>
    </div>
    
  );
  
};

export default Cat; 