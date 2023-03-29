import { useContext, useState } from "react"
import { SettingContext } from "../../Context/Settings";
import { NumberInput, Switch, TextInput, Button, Grid, Card, Text} from '@mantine/core';
import { IconSettings } from '@tabler/icons-react';
import useStyles from "../../hooks/styles";
import { When } from 'react-if';

const SettingForm = () => {
  const { classes } = useStyles();
  const [show, setShow] = useState(false);
  const {
    displayCount,
    setDisplayCount,
    showComplete,
    setShowComplete,
    sort,
    setSort,
    saveLocally
  } = useContext(SettingContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(true);
    saveLocally();

  }

  return (
    <>
      <h1 className={classes.h1}> <IconSettings />Manage Settings</h1>
      <Grid>
        <Grid.Col xls={12} sm={5}>
          <Card withBorder>
            <Switch
              label="show Complete"
              checked={showComplete}
              onChange={(event) => setShowComplete(event.currentTarget.checked)}
            />
            <form onSubmit={handleSubmit}>

              <NumberInput
                label="items per page"
                onChange={num => setDisplayCount(num)}
                placeholder={displayCount}
              />
              <label >
                <TextInput
                  label="sort Keyword"
                  value={sort}
                  // e.currentTarget.value
                  onChange={(e) => setSort(e.target.value)}
                />
                <Button type="submit"> sort </Button>
              </label>
            </form>
          </Card >
        </Grid.Col>

        <Grid.Col xs={12} sm={6}>
          <When condition={show} >
            <Card withBorder>
              <Card.Section>
                <Text m="xl" fontSize="xl" weight="bold">Updated Settings</Text>
                <Text>{showComplete ? 'show' : 'Hide'} Completed Todos</Text>
                <Text m="m">items per page: {displayCount}</Text>
                <Text m="m">sort Keyword: {sort}</Text>
              </Card.Section>
            </Card>
          </When>
        </Grid.Col>
      </Grid>
    </>
  );

};

export default SettingForm;