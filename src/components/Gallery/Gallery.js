/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Container, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import SectionTitle from '../SectionTitle/SectionTitle';
import CustomNodal from '../CustomModal/CustomModal';
import useStyles from './styles';

function Gallery() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const classes = useStyles();

  const handleCloseModal = () => setIsOpenModal(false);
  const handleOpenModal = () => setIsOpenModal(true);

  return (
    <React.Fragment>
      <CustomNodal open={isOpenModal} handleClose={handleCloseModal} title="Dom Pomocy Społecznej w Rudzie">
        <div>some awesome content: text, image ...</div>
      </CustomNodal>
      <Container maxWidth="false" component="section" className={classes.imageListSection}>
        <SectionTitle title="Wybrane realizacje pralni" />
        <ImageList className={classes.imageList} rowHeight={150} gap={5} cols={6}>
          <ImageListItem className={classes.imageListItem} cols={2} rows={1} onClick={handleOpenModal}>
            <img className={classes.imageListItemImage} src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=300&h=150&fit=crop&auto=format" loading="lazy" alt="1" />
            <ImageListItemBar className={classes.imageListItemCaption} title="Dom Pomocy Społecznej w Rybniku" position="top" />
          </ImageListItem>
          <ImageListItem className={classes.imageListItem} cols={2} rows={2} onClick={handleOpenModal}>
            <img className={classes.imageListItemImage} src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=300&h=300&fit=crop&auto=format" loading="lazy" alt="2" />
            <ImageListItemBar className={classes.imageListItemCaption} title="Hotel***, Słupsk" position="top" />
          </ImageListItem>
          <ImageListItem className={classes.imageListItem} cols={1} rows={1} onClick={handleOpenModal}>
            <img className={classes.imageListItemImage} src="https://images.unsplash.com/photo-1589118949245-7d38baf380d6?w=150&h=150&fit=crop&auto=format" loading="lazy" alt="3" />
            <ImageListItemBar className={classes.imageListItemCaption} title="Klub sportowy, LECH" position="top" />
          </ImageListItem>
          <ImageListItem className={classes.imageListItem} cols={1} rows={1} onClick={handleOpenModal}>
            <img className={classes.imageListItemImage} src="https://images.unsplash.com/photo-1471357674240-e1a485acb3e1?w=150&h=150&fit=crop&auto=format" loading="lazy" alt="4" />
            <ImageListItemBar className={classes.imageListItemCaption} title="Dom Pomocy Społecznej w Rybniku" position="top" />
          </ImageListItem>
          <ImageListItem className={classes.imageListItem} cols={2} rows={2} onClick={handleOpenModal}>
            <img className={classes.imageListItemImage} src="https://images.unsplash.com/photo-1567306301408-9b74779a11af?w=300&h=300&fit=crop&auto=format" loading="lazy" alt="5" />
            <ImageListItemBar className={classes.imageListItemCaption} title="SPZOZ w Lipsku" position="top" />
          </ImageListItem>
          <ImageListItem className={classes.imageListItem} cols={1} rows={1} onClick={handleOpenModal}>
            <img className={classes.imageListItemImage} src="https://images.unsplash.com/photo-1597645587822-e99fa5d45d25?w=150&h=150&fit=crop&auto=format" alt="6" />
            <ImageListItemBar className={classes.imageListItemCaption} title="Dom Pomocy Społecznej w Rybniku" position="top" />
          </ImageListItem>
          <ImageListItem className={classes.imageListItem} cols={1} rows={2} onClick={handleOpenModal}>
            <img className={classes.imageListItemImage} src="https://images.unsplash.com/photo-1518756131217-31eb79b20e8f?w=150&h=300&fit=crop&auto=format" alt="7" />
            <ImageListItemBar className={classes.imageListItemCaption} title="Dom Pomocy Społecznej w Rybniku" position="top" />
          </ImageListItem>
          <ImageListItem className={classes.imageListItem} cols={1} rows={1} onClick={handleOpenModal}>
            <img className={classes.imageListItemImage} src="https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=150&h=150&fit=crop&auto=format" alt="8" />
            <ImageListItemBar className={classes.imageListItemCaption} title="Dom Pomocy Społecznej w Rybniku" position="top" />
          </ImageListItem>
          <ImageListItem className={classes.imageListItem} cols={2} rows={1} onClick={handleOpenModal}>
            <img className={classes.imageListItemImage} src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=300&h=150&fit=crop&auto=format" alt="9" />
            <ImageListItemBar className={classes.imageListItemCaption} title="Dom Pomocy Społecznej w Rybniku" position="top" />
          </ImageListItem>
          <ImageListItem className={classes.imageListItem} cols={1} rows={1} onClick={handleOpenModal}>
            <img className={classes.imageListItemImage} src="https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=150&h=150&fit=crop&auto=format" alt="10" />
            <ImageListItemBar className={classes.imageListItemCaption} title="Dom Pomocy Społecznej w Rybniku" position="top" />
          </ImageListItem>
          <ImageListItem className={classes.imageListItem} cols={2} rows={2} onClick={handleOpenModal}>
            <img className={classes.imageListItemImage} src="https://images.unsplash.com/photo-1549388604-817d15aa0110?w=300&h=300&fit=crop&auto=format" alt="11" />
            <ImageListItemBar className={classes.imageListItemCaption} title="Dom Pomocy Społecznej w Rybniku" position="top" />
          </ImageListItem>
          <ImageListItem className={classes.imageListItem} cols={1} rows={2} onClick={handleOpenModal}>
            <img className={classes.imageListItemImage} src="https://images.unsplash.com/photo-1563298723-dcfebaa392e3?w=150&h=300&fit=crop&auto=format" alt="12" />
            <ImageListItemBar className={classes.imageListItemCaption} title="Dom Pomocy Społecznej w Rybniku" position="top" />
          </ImageListItem>
          <ImageListItem className={classes.imageListItem} cols={2} rows={2} onClick={handleOpenModal}>
            <img className={classes.imageListItemImage} src="https://images.unsplash.com/photo-1549388604-817d15aa0110?w=300&h=300&fit=crop&auto=format" alt="13" />
            <ImageListItemBar className={classes.imageListItemCaption} title="Dom Pomocy Społecznej w Rybniku" position="top" />
          </ImageListItem>
          <ImageListItem className={classes.imageListItem} cols={1} rows={1} onClick={handleOpenModal}>
            <img className={classes.imageListItemImage} src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=150&h=150&fit=crop&auto=format" alt="14" />
            <ImageListItemBar className={classes.imageListItemCaption} title="Dom Pomocy Społecznej w Rybniku" position="top" />
          </ImageListItem>
        </ImageList>
      </Container>
    </React.Fragment>
  );
}
export default Gallery;
