import {screen,render} from '@testing-library/react';
import  ParentForm from './Form';

test('Student name is there',()=>{
    render(<ParentForm/>);
    const studentnametext=screen.getByText(/Student Name/i);
    expect(studentnametext).toBeInTheDocument();
})