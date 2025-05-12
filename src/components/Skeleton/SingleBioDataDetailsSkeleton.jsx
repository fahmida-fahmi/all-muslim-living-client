import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Skeleton from '@mui/material/Skeleton';
import useLoading from '../Hooks/useLoading';
import SkeletonText from './SkeletonText';

export default function SingleBioDataDetailsSkeleton() {
  const [loading] = useLoading();

  if (!loading) return null;

  return (
    <Card>
      <div className="w-11/12 md:w-3/4 mx-auto mt-40 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-20">
        {/* Left Card */}
        <CardContent>
          <div className="h-[600px] bg-gray-200 rounded-2xl py-8">
            <div className="flex flex-col items-center justify-center py-4">
              <Skeleton animation="wave" variant="circular" width={100} height={100} />
              <Skeleton animation="wave" variant="text" width="60%" height={50} />
            </div>
            <div className="flex flex-col justify-center items-center px-8">
              <SkeletonText repeat={9} />
            </div>
          </div>
          <div className="flex py-3">
            <SkeletonText width="50%" height={50} style={{ marginRight: 12 }} />
            <SkeletonText width="50%" height={50} />
          </div>
          <SkeletonText width="100%" height={50} repeat={2} />
        </CardContent>

        {/* Right Content Area */}
        <CardContent className="md:col-span-2">
          {[1, 2].map((_, sectionIndex) => (
            <div key={sectionIndex} className="h-[400px] bg-gray-200 rounded-2xl p-8 mt-5">
              <div className="pb-8">
                <Skeleton animation="wave" variant="text" width="30%" height={50} />
              </div>
              {Array.from({ length: 5 }).map((_, rowIndex) => (
                <div key={rowIndex} className="flex justify-center items-center pb-4">
                  <SkeletonText width="50%" height={30} style={{ marginRight: 50 }} />
                  <SkeletonText width="50%" height={30} />
                </div>
              ))}
            </div>
          ))}
        </CardContent>
      </div>
    </Card>
  );
}
