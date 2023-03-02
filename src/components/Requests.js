import {  Outlet, Link } from "react-router-dom";

export default function Requests(){
    return(<><p>This is Requests</p><Link to="/">Notifications</Link><Outlet /></>)
}