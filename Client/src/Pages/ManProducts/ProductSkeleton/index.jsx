import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Skeleton } from "@mui/material";
export default function ProductSkeleton({discount}) {
  return (
    <Card sx={{ width: 300, height: 400 }}>
      <Skeleton sx={{ height: '50%', width:'100%' }} variant="rectangular" />
      <CardContent>
        <Skeleton width={'70%'} height={'48px'} />
         
        <Skeleton
          width={'50%'}
          height={'24px'}
        />
        
        {discount != 0 && (
         <Skeleton
         width={'50%'}
         height={'24px'}
       />
        )}
      </CardContent>
      <CardActions>
        <Skeleton variant="rounded" height={50} width={'50%'}/>
      </CardActions>
    </Card>
  );
}
