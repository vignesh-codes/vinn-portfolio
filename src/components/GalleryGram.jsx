import React, { useEffect, useState } from 'react';

import cinema1 from '../../public/assets/gallery/university_life/cinema-1.jpg';
import cinema2 from '../../public/assets/gallery/university_life/cinema-2.jpg';
import classroomActivity1 from '../../public/assets/gallery/university_life/classroom-activity-1.jpg';
import classroomActivity2 from '../../public/assets/gallery/university_life/classroom-activity-2.jpg';
import dinner1 from '../../public/assets/gallery/university_life/dinner-1.jpg';
import dinner2 from '../../public/assets/gallery/university_life/dinner-2.jpg';
import dinner3 from '../../public/assets/gallery/university_life/dinner-3.jpg';
import ducks1 from '../../public/assets/gallery/university_life/ducks-1.jpg';
import football1 from '../../public/assets/gallery/university_life/football-1.jpg';
import gradclub1 from '../../public/assets/gallery/university_life/gradclub-1.jpg';
import halloween1 from '../../public/assets/gallery/university_life/halloween-1.jpg';
import halloween2 from '../../public/assets/gallery/university_life/halloween-2.jpg';
import hoco1 from '../../public/assets/gallery/university_life/hoco-1.jpg';
import hoco2 from '../../public/assets/gallery/university_life/hoco-2.jpg';
import hoco3 from '../../public/assets/gallery/university_life/hoco-3.jpg';
import mascot1 from '../../public/assets/gallery/university_life/mascot-1.jpg';
import nightout1 from '../../public/assets/gallery/university_life/nightout-1.jpg';
import nightout2 from '../../public/assets/gallery/university_life/nightout-2.jpg';
import residence1 from '../../public/assets/gallery/university_life/residence-1.jpg';
import snow1 from '../../public/assets/gallery/university_life/snow-1.jpg';
import snow2 from '../../public/assets/gallery/university_life/snow-2.jpg';
import snow3 from '../../public/assets/gallery/university_life/snow-3.jpg';
import snow4 from '../../public/assets/gallery/university_life/snow-4.jpg';
import snow5 from '../../public/assets/gallery/university_life/snow-5.jpg';
import uniGate1 from '../../public/assets/gallery/university_life/uni-gate-1.jpg';

import aq1 from '../../public/assets/gallery/toronto/aq-1.jpg';
import arena1 from '../../public/assets/gallery/toronto/arena-1.jpg';
import arena2 from '../../public/assets/gallery/toronto/arena-2.jpg';
import arena3 from '../../public/assets/gallery/toronto/arena-3.jpg';
import arena4 from '../../public/assets/gallery/toronto/arena-4.jpg';
import arena5 from '../../public/assets/gallery/toronto/arena-5.jpg';
import arena6 from '../../public/assets/gallery/toronto/arena-6.jpg';
import arena7 from '../../public/assets/gallery/toronto/arena-7.jpg';
import chess1 from '../../public/assets/gallery/toronto/chess-1.jpg';
import chess2 from '../../public/assets/gallery/toronto/chess-2.jpg';
import chess3 from '../../public/assets/gallery/toronto/chess-3.jpg';
import cycle1 from '../../public/assets/gallery/toronto/cycle-1.jpg';
import dinnerArena1 from '../../public/assets/gallery/toronto/dinner-arena-1.jpg';
import harbour1 from '../../public/assets/gallery/toronto/harbour-1.jpg';
import harbour2 from '../../public/assets/gallery/toronto/harbour-2.jpg';
import harbour3 from '../../public/assets/gallery/toronto/harbour-3.jpg';
import harbour4 from '../../public/assets/gallery/toronto/harbour-4.jpg';
import harbour5 from '../../public/assets/gallery/toronto/harbour-5.jpg';
import harbour6 from '../../public/assets/gallery/toronto/harbour-6.jpg';
import house1 from '../../public/assets/gallery/toronto/house-1.jpg';
import street1 from '../../public/assets/gallery/toronto/street-1.jpg';


const gallerySections = [
    {
        title: 'University Life',
        rows: [
            {
                cols: 2, height: '250px', images: [
                    { url: dinner3, row: 1, col: 1, row_span: 1, col_span: 2 },
                    { url: classroomActivity1, row: 1, col: 3, row_span: 1, col_span: 2 },
                ]
            },
            {
                cols: 2, height: '400px', images: [
                    { url: hoco1, row: 1, col: 1, row_span: 1, col_span: 1 },
                    { url: mascot1, row: 1, col: 2, row_span: 1, col_span: 1 },
                    { url: football1, row: 1, col: 3, row_span: 1, col_span: 2 },
                ]
            },
            {
                cols: 2, height: '450px', images: [
                    { url: cinema1, row: 1, col: 1, row_span: 1, col_span: 1 },
                    { url: nightout1, row: 1, col: 2, row_span: 1, col_span: 3 },
                ]
            },
            {
                cols: 2, height: '350px', images: [
                    { url: hoco2, row: 1, col: 1, row_span: 1, col_span: 1 },
                    { url: hoco3, row: 1, col: 2, row_span: 1, col_span: 2 },
                    { url: nightout2, row: 1, col: 4, row_span: 1, col_span: 2 },
                ]
            },
            {
                cols: 2, height: '350px', images: [
                    { url: halloween1, row: 1, col: 1, row_span: 1, col_span: 2 },
                    { url: halloween2, row: 1, col: 3, row_span: 1, col_span: 2 },
                    { url: ducks1, row: 2, col: 1, row_span: 1, col_span: 1 },
                    { url: gradclub1, row: 2, col: 2, row_span: 1, col_span: 3 },
                ]
            },
            {
                cols: 2, height: '350px', images: [
                    { url: classroomActivity2, row: 1, col: 1, row_span: 1, col_span: 2 },
                    { url: dinner1, row: 1, col: 3, row_span: 1, col_span: 2 },
                    { url: snow1, row: 2, col: 1, row_span: 1, col_span: 1 },
                    { url: snow2, row: 2, col: 2, row_span: 1, col_span: 1 },
                    { url: snow3, row: 2, col: 3, row_span: 1, col_span: 2 },
                ]
            },
            {
                cols: 2, height: '350px', images: [
                    { url: snow4, row: 1, col: 1, row_span: 1, col_span: 1 },
                    { url: snow5, row: 1, col: 2, row_span: 1, col_span: 1 },
                    { url: dinner2, row: 1, col: 3, row_span: 1, col_span: 2 },
                ]
            },
            
        ]
    },
    {
        title: 'Snaps From My Hangouts',
        rows: [
            {
                cols: 2, height: '400px', images: [
                    { url: chess3, row: 1, col: 1, row_span: 1, col_span: 1 },
                    { url: chess1, row: 1, col: 2, row_span: 1, col_span: 1 },
                    { url: harbour3, row: 1, col: 3, row_span: 1, col_span: 2 },
                ]
            },
            {
                cols: 2, height: '350px', images: [
                    { url: harbour4, row: 1, col: 1, row_span: 1, col_span: 1 },
                    { url: harbour6, row: 1, col: 2, row_span: 1, col_span: 1 },
                    { url: chess2, row: 1, col: 3, row_span: 1, col_span: 1 },
                    { url: harbour5, row: 1, col: 4, row_span: 1, col_span: 1 },
                ]
            },
            {
                cols: 2, height: '450px', images: [
                    { url: cycle1, row: 1, col: 1, row_span: 1, col_span: 2 },
                    { url: harbour2, row: 1, col: 3, row_span: 1, col_span: 2 },
                ]
            },
            {
                cols: 2, height: '350px', images: [
                    { url: arena1, row: 1, col: 1, row_span: 1, col_span: 1 },
                    { url: dinnerArena1, row: 1, col: 2, row_span: 1, col_span: 2 },
                    { url: street1, row: 1, col: 4, row_span: 1, col_span: 2 },
                ]
            },
            {
                cols: 2, height: '300px', images: [
                    { url: arena3, row: 1, col: 1, row_span: 1, col_span: 1 },
                    { url: aq1, row: 1, col: 2, row_span: 1, col_span: 2 },
                    { url: house1, row: 1, col: 4, row_span: 1, col_span: 1 },
                ]
            },
            {
                cols: 2, height: '350px', images: [
                    { url: arena2, row: 1, col: 1, row_span: 1, col_span: 2 },
                    { url: arena4, row: 1, col: 3, row_span: 1, col_span: 2 },
                    
                ]
            },
            {
                cols: 2, height: '300px', images: [
                    { url: snow4, row: 1, col: 1, row_span: 1, col_span: 1 },
                    { url: snow5, row: 1, col: 2, row_span: 1, col_span: 1 },
                    { url: dinner2, row: 1, col: 3, row_span: 1, col_span: 2 },
                ]
            },
            {
                cols: 2, height: '400px', images: [
                    { url: harbour1, row: 1, col: 1, row_span: 1, col_span: 2 },
                    { url: arena7, row: 1, col: 3, row_span: 1, col_span: 2 },
                ]
            },
            
        ]
    }
];

export const GalleryGram = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
  
    // Update screen size on window resize
    useEffect(() => {
      const handleResize = () => {
        setIsSmallScreen(window.innerWidth <= 640); // Adjust as needed
      };
      handleResize(); // Initialize size check on mount
      window.addEventListener('resize', handleResize); // Listen for resize events
      return () => window.removeEventListener('resize', handleResize); // Cleanup on unmount
    }, []);
  
    return (
      <div className="py-10 md:py-20">
        {gallerySections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-10">
            <div>
                <h2 className="text-4xl font-semibold flex justify-center mb-5">{section.title}</h2>
            </div>
            {section.rows.map((row, rowIndex) => {
              return (
                <div
                  key={rowIndex}
                  className="grid gap-2 mb-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4"
                  style={{
                    gridAutoRows: row.height,
                  }}
                >
                  {row.images.map((image, imageIndex) => {
                    const imageStyle = isSmallScreen
                      ? {
                          gridRowStart: imageIndex + 1,
                          gridColumnStart: 1,
                          gridRowEnd: imageIndex + 1,
                          gridColumnEnd: 1,
                        }
                      : {
                          gridRowStart: image.row,
                          gridColumnStart: image.col,
                          gridRowEnd: image.row + image.row_span,
                          gridColumnEnd: image.col + image.col_span,
                        };
                    return (
                      <div
                        key={imageIndex}
                        className="overflow-hidden rounded-lg cursor-pointer hover:scale-105 duration-150 ease-in-out"
                        style={imageStyle}
                        onClick={() => {
                          window.open(image.url, '_blank');
                        }}
                      >
                        <img
                          src={image.url}
                          alt={`gallery-img-${imageIndex}`}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    );
  };
