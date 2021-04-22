import Post from './models/post';
import faker from 'faker';


export default function createFakeData() {
    const posts = [...Array(40).keys()].map(i => ({
        title: `포스트 #${i}`,
        body: faker.lorem.paragraphs(3),
        tags: ['가짜', '데이터'],
    }));

    Post.insertMany(posts, (err, docs) => {
        console.log(docs);
    });
}

