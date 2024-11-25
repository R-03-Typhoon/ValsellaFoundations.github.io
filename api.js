import PocketBase from './pocketbase.es.mjs';

const url = 'https://english.pockethost.io/'
const pb = new PocketBase(url)
async function getAllVolunteers() {
  const records = await pb.collection('Volunteers').getFullList();
  return records

  }
async function getOneVolunteer(id){
  const record = await pb.collection('Volunteers').getOne(id);
  return record
}
  async function getMemberTestimonies() {
    const records = await pb.collection('testimonies').getFullList();
    return records
  }
  export default getAllVolunteers; getOneVolunteer ; getMemberTestimonies; url