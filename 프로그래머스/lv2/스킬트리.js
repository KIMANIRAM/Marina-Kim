function solution(skill, skill_trees) {
    const regex = new RegExp(`[^${skill}]`, 'g');
    return skill_trees.map(v => v.replace(regex, ''))
        .filter(v => skill.indexOf(v) === 0 || v === '')
        .length;
}
