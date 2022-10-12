import  HomeComponent from "./HomeComponent";
import {render,screen}  from "@testing-library/react";

test('renders table headings',()=>{
render(<HomeComponent/>);
const ele=screen.getByText(/Student Name/i);
expect(ele).toBeInTheDocument();
});