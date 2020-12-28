import React from 'react';
import { Modal } from 'antd';
import StoryHeading from './StoryHeading';

const StoryModal = ({ open, close, storyContent, ref }) => (
    <Modal
        visible={open}
        onCancel={close}
        cancelText="close"
        className="story-modal"
        centered
        closable={false}
        footer={false}
        wrapClassName="story-modal-container"
        ref={ref}
        title={<StoryHeading title={storyContent.title} />}
    >
        <div>
            <h3>{storyContent.description}</h3>
            <div>
                <p>{storyContent.content}</p>
            </div>
        </div>
    </Modal>
);

export default StoryModal;
