import Button from "@mui/material/Button";
import IconButton from '@mui/material/IconButton';
import Fingerprint from '@mui/icons-material/Fingerprint';

export default function Material() {
  return (
    <div>
      <h1>This is Material UI</h1>
      <Button variant="outlined">Primary</Button>
      <IconButton aria-label="fingerprint" color="secondary">
        <Fingerprint />
      </IconButton>
    </div>
  );
}
