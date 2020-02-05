const DATA = [
  {
    year: '2000',
    title: 'PRIMARY STUDENT',
    image: 'image/1.jpg'
  },
  {
    year: '2010',
    title: 'HIGH SCHOOL STUDENT',
    image: 'image/2.jpg'
  },
  {
    year: '2012',
    title: 'ARCHITECTURE STUDENT',
    image: 'image/3.jpg'
  },
  {
    year: '2015',
    title: 'INTERN ARCHITECT',
    image: 'image/4.jpg'
  },
  {
    year: '2017',
    title: 'PROJECT ARCHITECT',
    image: 'image/5.jpg'
  },
  {
    year: '2019',
    title: 'GRADUATE STUDENT',
    image: 'image/6.jpg'
  },

];

if(document.getElementById('timeline')) {
  let timeline = new Timeline('timeline', DATA);
  timeline.init();
}
