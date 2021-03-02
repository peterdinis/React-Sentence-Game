import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { createSentenceActionCreator } from "../redux/sentenceActions";
import { SentenceState } from "../redux/sentenceTypes";
import {
  HeadingInfo,
  Homepage,
  InfoSection,
  FinalSentence,
  Inputs,
  SentenceForm,
  Subtextinfo,
  CreateButton,
  FinalDiv,
  HeadingThree,
} from "../styles/CreateSentence.styled";

const CreateSentence = function () {
  const dispatch = useDispatch();
  const sentences = useSelector((state: SentenceState) => state.sentences);
  const [newSentenceWhat, setNewSentenceWhat] = useState<string>("");
  const [newSentenceWhen, setNewSentenceWhen] = useState<string>("");
  const [newSentenceWho, setNewSentenceWho] = useState<string>("");
  const [newSentenceWhere, setNewSentenceWhere] = useState<string>("");

  const handleWhatChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNewSentenceWhat(e.target.value);
  };

  const handleWhoChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNewSentenceWho(e.target.value);
  };

  const handleWhenChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNewSentenceWhen(e.target.value);
  };

  const handleWhereChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNewSentenceWhere(e.target.value);
  };

  const handleCreateNewSentence = (
    e: React.FormEvent<HTMLFormElement>
  ): void => {
    e.preventDefault();
    if (!newSentenceWhat.length) return;
    if (!newSentenceWhen.length) return;
    if (!newSentenceWho.length) return;
    if (!newSentenceWhere.length) return;

    // dispacth action

    dispatch(
      createSentenceActionCreator({
        what: newSentenceWhat,
        who: newSentenceWhen,
        when: newSentenceWho,
        where: newSentenceWhere,
      })
    );
  };

  return (
    <Homepage>
      <HeadingInfo>Sentence Game</HeadingInfo>
      <Subtextinfo>Do štyroch inputov napíš slovo a vznikne veta</Subtextinfo>
      <SentenceForm onSubmit={handleCreateNewSentence}>
        <Inputs
          onChange={handleWhoChange}
          name="who"
          placeholder="who"
          value={newSentenceWho}
        />

        <Inputs
          onChange={handleWhatChange}
          name="what"
          placeholder="what"
          value={newSentenceWhat}
        />
        <Inputs
          onChange={handleWhenChange}
          name="when"
          placeholder="when"
          value={newSentenceWhen}
        />

        <Inputs
          onChange={handleWhereChange}
          name="where"
          placeholder="where"
          value={newSentenceWhere}
        />

        <CreateButton type="submit">Create</CreateButton>
      </SentenceForm>

      <FinalDiv>
        <HeadingThree>Výsledná veta</HeadingThree>
        {sentences.map((sentence, i) => (
          <InfoSection>
            <FinalSentence>
              {sentence.who} {sentence.what} {sentence.when} {sentence.where}
            </FinalSentence>
          </InfoSection>
        ))}
      </FinalDiv>
    </Homepage>
  );
};

export default CreateSentence;
