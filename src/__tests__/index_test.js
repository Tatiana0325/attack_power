import {Magician, Daemon} from '../js/index';

test('Линейный упадок атаки у мага', () => {
    const mag = new Magician();
    mag.setAttack(2);
    expect(mag.getAttack()).toBe(90);
});

test('Линейный упадок атаки у мага', () => {
    const mag = new Magician();
    mag.setAttack(5);
    expect(mag.getAttack()).toBe(60);
});

test('Линейный упадок атаки у демона', () => {
    const daemon = new Daemon();
    daemon.setAttack(2);
    expect(daemon.getAttack()).toBe(90);
});

test('Линейный упадок атаки у демона', () => {
    const daemon = new Daemon();
    daemon.setAttack(5);
    expect(daemon.getAttack()).toBe(60);
});

test('Падение атаки у мага при "дурмане"', () => {
    const mag = new Magician();
    mag.setStoned(2);
    expect(mag.getStoned()).toBe(85);
});

test('Падение атаки у демона при "дурмане"', () => {
    const daemon = new Daemon();
    daemon.setStoned(2);
    expect(daemon.getStoned()).toBe(85);
});