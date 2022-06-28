import { FC } from 'react';
import Tile, { ArticleTileList } from '../components/ArticleTile';

const Index: FC = () => (
  <>
    <p>Cześć, mam na imię John i chciałbym opowiedzieć i zabrać Cię w daleką podróż.</p>
    <p>Zaczynajmy! Wybierz pierwszą historię, którą chcesz poznać z kafelków poniżej.</p>
    <h3>Moje ostatnie wojaże</h3>
    <ArticleTileList>
      <Tile
        slug='w-poznaniu-nie-tylko-koziolki'
        title='W Poznaniu nie tylko Koziołki'
        date='2022-06-25'
        imageUrl='https://picsum.photos/300/200?random=1'
      />
      <Tile
        slug='wroclaw-i-jego-krasnale'
        title='Wrocław i jego krasnale'
        date='2022-05-30'
        imageUrl='https://picsum.photos/300/200?random=2'
      />
      <Tile
        slug='pierniki-tylko-nie-z-torunia'
        title='Pierniki? Tylko nie z Torunia!'
        date='2022-04-18'
        imageUrl='https://picsum.photos/300/200?random=3'
      />
      <Tile
        slug='warszawa-stoikiem-stoi'
        title='Warszawa słoikiem stoi'
        date='2022-03-01'
        imageUrl='https://picsum.photos/300/200?random=4'
      />
      <Tile
        slug='jaki-gdansk-taki-neptun'
        title='Jaki Gdańsk, taki Neptun'
        date='2022-01-22'
        imageUrl='https://picsum.photos/300/200?random=5'
      />
    </ArticleTileList>
  </>
);

export default Index;
