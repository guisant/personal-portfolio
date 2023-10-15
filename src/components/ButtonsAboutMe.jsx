import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const ButtonsAboutMe = () => {

  const onButtonClick = () => {
     
    // using Java Script method to get PDF file
    fetch("cv-guilherme.pdf").then((response) => {
        response.blob().then((blob) => {
         
            // Creating new object of PDF file
            const fileURL =
                window.URL.createObjectURL(blob);
                 
            // Setting various property values
            let alink = document.createElement("a");
            alink.href = fileURL;
            alink.download = "cv-guilherme.pdf";
            alink.click();
        });
    });
  };

  return (
    <Stack spacing={3} direction="row">
      <Button variant="outlined" size="large" sx={{ color: '#fff' }} color='secondary' startIcon={<CloudDownloadIcon />} onClick={onButtonClick}>Currículo</Button> 
      <Button variant="outlined" size="large" sx={{ ml: 5, color: '#fff' }} color='secondary' startIcon={<MailOutlineIcon />}>Contato</Button>
    </Stack>
  );
}
export default ButtonsAboutMe;