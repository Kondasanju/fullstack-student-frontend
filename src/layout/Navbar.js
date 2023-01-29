import React,{useState} from "react";
import { Link } from "react-router-dom";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import axios from "axios";
export default function Navbar() {
const iconStyle={
    color:'white',
    marginRight:10,
   
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            STUDENT PORTPOLIO
          </Link>
          <div> <a href="http://localhost:8080/export-to-pdf" style={iconStyle}>
                <FileDownloadIcon style={iconStyle}>
                </FileDownloadIcon></a>
          <Link className="btn btn-outline-light" to="/">
            LOGOUT
          </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
