import React from 'react';
import { TimelineCollectionModel } from '../../models/TimelineCollnModel';
import TimelineItem from '../timeline-elements/timeline-card/timeline-card';
import {
  TimelineCollectionWrapper,
  TimelineItemWrapper,
} from './timeline-horizontal.styles';

const TimelineCollection: React.FunctionComponent<TimelineCollectionModel> = ({
  items,
  itemWidth,
  handleItemClick,
  autoScroll,
  mode,
  wrapperId,
  theme,
  slideShowRunning,
  cardHeight,
  slideItemDuration,
  onElapsed,
}: TimelineCollectionModel) => {
  return (
    <TimelineCollectionWrapper
      className={`${mode.toLowerCase()} timeline-horz-container`}
      data-testid="timeline-collection"
    >
      {items.map((item) => (
        <TimelineItemWrapper
          key={item.id}
          width={itemWidth}
          className={`${
            item.visible ? 'visible' : ''
          } timeline-horz-item-container`}
        >
          <TimelineItem
            {...item}
            onClick={handleItemClick}
            autoScroll={autoScroll}
            mode={mode}
            wrapperId={wrapperId}
            theme={theme}
            slideShowRunning={slideShowRunning}
            cardHeight={cardHeight}
            slideItemDuration={slideItemDuration}
            onElapsed={onElapsed}
          />
        </TimelineItemWrapper>
      ))}
    </TimelineCollectionWrapper>
  );
};

export default TimelineCollection;
