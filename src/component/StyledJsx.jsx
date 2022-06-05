export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p>-Styled JSX-</p>
        <button>FIGHT!</button>
      </div>
      <style jsx="true">
        {' 
          .container{
            border : solid 2px;
          }
        '}
        
      </style>
    </>
  );
};
