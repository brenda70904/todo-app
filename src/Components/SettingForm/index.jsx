import { useContext } from "react"
import { SettingContext } from "../../Context/Settings";
import { NumberInput, Switch, TextInput, Button } from '@mantine/core';

const SettingForm = () => {

  const {
    displayCount,
    setDisplayCount,
    showComplete,
    setShowComplete,
    sort,
    setSort
  } = useContext(SettingContext);

  return (
    <>

      <Switch
        checked={showComplete}
        onChange={(event) => setShowComplete(event.currentTarget.checked)}
      />

      <NumberInput
        onChange={num => setDisplayCount(num)}
        defaultValue={3}
        placeholder={displayCount}
        label="items per page"
      />

      <label >
        <TextInput
          value={sort}
          onChange={(event) => setSort(event.currentTarget.value)}
        />
        <Button type="submit"> sort </Button>
      </label>


    </>
  );

};

export default SettingForm;