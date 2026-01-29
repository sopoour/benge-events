import EmailCopy from '@app/components/EmailCopy/EmailCopy';
import Section from '@app/components/layout/Section';
import Button from '@app/components/Button';
import LinkContainer from '@app/components/LinkContainer';
import LoadingSkeletonGeneral from '@app/components/LoadingSkeletonGeneral.tsx';
import MarkdownConfig from '@app/components/MarkdownConfig/MarkdownConfig';
import Typography from '@app/components/Typography/Typography';
import { fetcher } from '@app/hooks/fetch/useFetch';
import useLang from '@app/hooks/useLang';
import { GeneralContent } from '@app/services/graphql/types';
import { text } from '@app/styles/fonts';
import { flexColumn, flexRow } from '@app/styles/mixins';
import { Checkbox, Flex, Group, Textarea, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { FC, useState } from 'react';
import styled from 'styled-components';
import useSWR from 'swr';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.bg.default};

  label {
    margin-bottom: 8px;
    color: ${({ theme }) => theme.colors.fg.default};
  }
`;

const ContactContainer = styled.div`
  ${flexColumn};
  gap: 64px;
  align-items: center;

  ${({ theme }) => theme.media('sm')`
    ${flexRow};
    
  `}
`;

const ContactLinkContainer = styled(LinkContainer)`
  svg {
    &:hover {
      path {
        fill: ${({ theme }) => theme.colors.fg.contrast} !important;
      }
    }
  }
`;

const Feedback: FC = () => {
  const lang = useLang();
  const { data, isLoading } = useSWR<GeneralContent | null>(
    `/api/generalContent?lang=${lang}`,
    fetcher,
  );

  const labels = () => {
    switch (lang) {
      case 'en':
        return {
          name: 'Name',
          namePlaceholder: 'Your name',
          email: 'Email',
          emailPlaceholder: 'you@example.com',
          message: 'Message',
          messagePlaceholder: 'Write your message...',
          checkbox:
            'I agree that this data may be stored and processed for the purpose of contacting me. I am aware that I can withdraw my consent at any time.',
          sent: 'Message sent successfully!',
          error: 'Something went wrong. Please try again.',
          sideNote: 'Or reach us at',
        };
      case 'de':
        return {
          name: 'Name',
          namePlaceholder: 'Dein Name',
          email: 'E-Mail',
          emailPlaceholder: 'name@beispiel.com',
          message: 'Nachricht',
          messagePlaceholder: 'Schreibe eine Nachricht...',
          checkbox:
            'Ich bin damit einverstanden, dass diese Daten zum Zweck der Kontaktaufnahme gespeichert und verarbeitet werden. Mir ist bekannt, dass ich meine Einwilligung jederzeit widerrufen kann.',
          sent: 'Nachricht erfolgreich gesendet!',
          error: 'Etwas ist schief gelaufen. Bitte versuche es noch einmal.',
          sideNote: 'Oder erreiche uns unter',
        };
      default:
        return {
          name: 'Name',
          email: 'E-Mail',
          message: 'Nachricht',
          checkbox:
            'Ich bin damit einverstanden, dass diese Daten zum Zweck der Kontaktaufnahme gespeichert und verarbeitet werden. Mir ist bekannt, dass ich meine Einwilligung jederzeit widerrufen kann.',
          sent: 'Nachricht erfolgreich gesendet!',
          error: 'Etwas ist schief gelaufen. Bitte versuche es noch einmal.',
          sideNote: 'Oder erreiche uns unter',
        };
    }
  };

  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      message: '',
      gdpr: false,
    },

    validate: {
      name: (value) => (value.trim().length > 0 ? null : 'Name is required'),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      message: (value) =>
        value.trim().length > 10 ? null : 'Message must be at least 10 characters',
      gdpr: (value) => (value ? null : 'You must agree to the GDPR terms'),
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (res.ok) {
        setStatus('sent');
        form.reset();
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  if (isLoading) {
    return <LoadingSkeletonGeneral />;
  }

  return (
    <Section id="feedback">
      <>
        <Typography as="h1" fontSize="48px">
          {data?.feedbackHeadline}
        </Typography>
        <MarkdownConfig content={data?.feedbackDescription as string} />
        <ContactContainer>
          <FormContainer onSubmit={form.onSubmit(handleSubmit)}>
            <TextInput
              label="Name"
              placeholder={labels().namePlaceholder}
              {...form.getInputProps('name')}
              withAsterisk
              size="md"
              radius="md"
              key={form.key('name')}
            />
            <TextInput
              label={labels().email}
              placeholder={labels().emailPlaceholder}
              {...form.getInputProps('email')}
              withAsterisk
              size="md"
              radius="md"
              key={form.key('email')}
            />
            <Textarea
              label={labels().message}
              placeholder={labels().messagePlaceholder}
              minRows={4}
              autosize
              {...form.getInputProps('message')}
              withAsterisk
              size="md"
              radius="md"
            />
            <Checkbox
              style={{ maxWidth: '400px' }}
              label={labels().checkbox}
              {...form.getInputProps('gdpr', { type: 'checkbox' })}
            />
            <Group mt="md">
              <Button fullWidth isSubmitButton text={lang === 'en' ? 'Send' : 'Senden'} />
            </Group>

            {status === 'sent' && (
              <Typography type={text.style.fontFamily}>{labels().sent}</Typography>
            )}
            {status === 'error' && (
              <Typography type={text.style.fontFamily} color="red">
                {labels().error}
              </Typography>
            )}
          </FormContainer>
          <Flex gap={'16px'} direction={'column'} align={{ base: 'center', sm: 'flex-start' }}>
            <Typography fontSize="24px" fontWeight={600} as="h3">
              {labels().sideNote}
            </Typography>
            <EmailCopy email="susi.nguimba@gmail.com" />
            <ContactLinkContainer />
          </Flex>
        </ContactContainer>
      </>
    </Section>
  );
};

export default Feedback;
