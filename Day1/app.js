import React from 'react';
import ReactDOM from 'react-dom/client';

// const h2 = React.createElement('h1', '{}' , 'Hey naste react');
//          const getId1 = document.getElementById('root');
//         const root = ReactDOM.createRoot(getId1);
//         root.render(h2)

        const h1 = <h1> Hey naste react </h1>;
       
        

        const FirstComponent = () => {
                return <h1>Hey first  react componenet</h1>
        }

        const SecondComponenet = () => {
                return (
                        <div>
                                <h1>Hey second react component</h1>
                                <FirstComponent />
                                {h1}
                        </div>
                )

        }
         const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<SecondComponenet />);
