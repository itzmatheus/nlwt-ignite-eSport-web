import * as Dialog from '@radix-ui/react-dialog';
import { Check, GameController } from 'phosphor-react';
import * as Checkbox from '@radix-ui/react-checkbox';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { Input } from './Form/Input';
import { FormEvent, useEffect, useState } from 'react';
import { Game } from '../App';
import axios from 'axios';

export function CreateAdModal() {

    const [games, setGames] = useState<Game[]>([]);
    const [weekdays, setWeekdays] = useState<string[]>([]);
    const [useVoiceChannel, setUseVoiceChannel] = useState<boolean>(false)

    useEffect(() => {
      axios('http://localhost:3333/games').then(response => {
          setGames(response.data);
        })
    }, [])

    async function handleCreateAdd(event: FormEvent) {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);
        const data = Object.fromEntries(formData);

        try {
            await axios.post(`http://localhost:3333/games/${data.game}/ads`, {
                name: data.name,
                yearsPlaying: Number(data.yearsPlaying),
                discord: data.discord,
                weekdays: weekdays.map(Number),
                hourStart: data.hourStart,
                hourEnd: data.hourEnd,
                useVoiceChannel: useVoiceChannel
            });
            alert('Anúncio criado com sucesso!');
        } catch (err) {
            console.error(err);
            alert("Erro ao criar o anúncio");
        }

    }

    return (
        <Dialog.Portal>
        <Dialog.Overlay className='bg-black/60 inset-0 fixed' />
        <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[450px] shadow-lg shadow-black/25'>
          <Dialog.Title className='text-2xl font-black'>Publique um anúncio</Dialog.Title>

            <form onSubmit={handleCreateAdd} className='mt-8 flex flex-col gap-4'>
              <div className='flex flex-col gap-2'>
                <label className='font-semibold' htmlFor="game">Qual o game?</label>
                <select
                    className='bg-zinc-900 py-3 px-4 rounded text-sm appearance-none'
                    id="game"
                    name='game'
                    defaultValue=""
                >
                        <option disabled value="">Selecione o game que deseja jogar </option>
                        { games.map(game => <option key={game.id} value={game.id}>{game.title}</option>) }
                </select>
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="name">Seu nome (ou nickname)</label>
                <Input name='name' id='name' type="text" placeholder='Como te chamam dentro do game?' />
              </div>

              <div className='grid grid-cols-2 gap-6'>
                <div className='flex flex-col gap-2'>
                  <label htmlFor="yearsPlaying">Joga a quantos anos?</label>
                  <Input name='yearsPlaying' id='yearsPlaying' type="number" placeholder='Tudo bem ser ZERO' />
                </div>
                <div className='flex flex-col gap-2'>
                  <label htmlFor="discord">Qual seu discord?</label>
                  <Input name='discord' id='discord' type="text" placeholder='Usuario#0000' />
                </div>
              </div>

              <div className='flex gap-6'>
                <div className='flex flex-col gap-2'> 
                  <label htmlFor="weekdays">Quando costuma jogar?</label>
                    <ToggleGroup.Root
                        className='grid grid-cols-4 gap-2'
                        type='multiple'
                        value={weekdays}
                        onValueChange={setWeekdays}
                    >
                        <ToggleGroup.Item value='0' className={`w-8 h-8 rounded ${ weekdays.includes('0') ? 'bg-violet-500' : 'bg-zinc-900'}`} title='Domingo'>D</ToggleGroup.Item>
                        <ToggleGroup.Item value='1' className={`w-8 h-8 rounded ${ weekdays.includes('1') ? 'bg-violet-500' : 'bg-zinc-900'}`} title='Segunda'>S</ToggleGroup.Item>
                        <ToggleGroup.Item value='2' className={`w-8 h-8 rounded ${ weekdays.includes('2') ? 'bg-violet-500' : 'bg-zinc-900'}`} title='Terça'>T</ToggleGroup.Item>
                        <ToggleGroup.Item value='3' className={`w-8 h-8 rounded ${ weekdays.includes('3') ? 'bg-violet-500' : 'bg-zinc-900'}`} title='Quarta'>Q</ToggleGroup.Item>
                        <ToggleGroup.Item value='4' className={`w-8 h-8 rounded ${ weekdays.includes('4') ? 'bg-violet-500' : 'bg-zinc-900'}`} title='Quinta'>Q</ToggleGroup.Item>
                        <ToggleGroup.Item value='5' className={`w-8 h-8 rounded ${ weekdays.includes('5') ? 'bg-violet-500' : 'bg-zinc-900'}`} title='Sexta'>S</ToggleGroup.Item>
                        <ToggleGroup.Item value='6' className={`w-8 h-8 rounded ${ weekdays.includes('6') ? 'bg-violet-500' : 'bg-zinc-900'}`} title='Sábado'>S</ToggleGroup.Item>
                    </ToggleGroup.Root>

                </div>
                <div className='flex flex-col gap-2 flex-1'>
                  <label htmlFor="hourStart">Qual horário do dia?</label>
                  <div className='grid grid-cols-2 gap-2'>
                    <Input name='hourStart' type="time" placeholder='De' id='hourStart' />
                    <Input name='hourEnd' type="time" placeholder='Ate' id='hourEnd' />
                  </div>
                </div>
              </div>

              <label className='mt-2 flex items-center gap-2 text-sm hover:cursor-pointer'>
                <Checkbox.Root
                    className='w-6 h-6 p-1 rounded bg-zinc-900'
                    checked={useVoiceChannel}
                    onCheckedChange={(checked) => {
                        if (checked === true) {
                            setUseVoiceChannel(true);
                        } else {
                            setUseVoiceChannel(false);
                        }
                    }}
                >
                    <Checkbox.Indicator>
                        <Check className='w-4 h-4 text-emerald-400' />
                    </Checkbox.Indicator>
                </Checkbox.Root>
                Costumo me comunicar ao chat de voz
              </label>

              <footer className='mt-4 flex justify-end gap-4'>
                <Dialog.Close className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600'>Cancelar</Dialog.Close>
                <button
                  className='bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600'
                  type='submit'>
                  <GameController size={24} />
                  Encontrar duo
                </button>
              </footer>
            </form>

        </Dialog.Content>
      </Dialog.Portal>

    )
}