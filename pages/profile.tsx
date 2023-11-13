import { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
// import Menu from "../components/Menu";
import Link from "next/link";

interface ProfileProps {
    account: string;
    logout: React.MouseEventHandler<HTMLButtonElement>;
}

const Profile: React.FC<ProfileProps> = (props) => {
    const [uname, setUname] = useState("");
    const [mail, setMail] = useState("");
    const [tid, setTid] = useState("");

    useEffect(() => {
        const c_uname = localStorage.getItem("name");
        const c_mail = localStorage.getItem("email");
        const c_tid = localStorage.getItem("telegram");
        if (c_uname && c_mail && c_tid) {
            setUname(c_uname);
            setMail(c_mail);
            setTid(c_tid);
        }
    }, []);

    return (
        <>
            <Box sx={{ ml: 4, mt: 2 }}>
                <Link href="/">
                    <Button variant="outlined">Back</Button>
                </Link>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '50vh', flexDirection: "column" }}>
                <Typography variant="h5" sx={{ mb: 2 }}>username: {uname}</Typography>
                <Typography variant="h5" sx={{ mb: 2 }}>mail: {mail}</Typography>
                <Typography variant="h5" sx={{ mb: 2 }}>telegram id: {tid}</Typography>
            </Box>
        </>
    )
}

export default Profile;