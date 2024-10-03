import InvalidChevDownIcon from 'src/assets/icons/chevron-down.svg';
import InvalidEmptyStateImg from 'src/assets/images/empty-state.svg?react';
import ValidChevDownIcon from 'src/assets/icons/chevron-down.svg?react';
import ValidEmptyStateImg from 'src/assets/images/empty-state.svg';

const InvalidComponent = () => {
  return (
    <div>
      {/* RTL classname validation along with bare string checks */}
      <span className="pl-4">Left padding</span>
      <span className="pr-4">Right padding</span>
      <span className="ml-4">Left margin</span>
      <span className="mr-4">Right margin</span>
      {/* Bare string check for not allowed list*/}
      <span>Test</span>
      <Input title="some title" placeholder="Some value"></Input>
      {InvalidChevDownIcon}
      <img src={InvalidEmptyStateImg} alt="Empty state" />
    </div>
  );
};

const ValidComponent = () => {
  return (
    <div>
      {/* RTL classname validation along with bare string checks */}
      <span className="ps-4">{t('padding.start')}</span>
      <span className="pe-4">{t('padding.end')}</span>
      <span className="ms-4">{t('margin.start')}</span>
      <span className="me-4">{t('margin.end')}</span>
      {/* Bare string check for allowed list*/}
      <span>{t('hello')}</span>
      <span>(),.&+-=*/#%!?:[]{}- |</span>
      <a title={t('some.title')}></a>
      <Input title={t('some.title')} placeholder={t('some.value')}></Input>
      {ValidChevDownIcon}
      <img src={ValidEmptyStateImg} alt={t('empty.state')} />
    </div>
  );
};
