import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '9f6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'eb0'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'ad9'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '07c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '9b8'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'ddb'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '628'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '13a'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '2ae'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '6f8'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '85c'),
            routes: [
              {
                path: '/cardano-components/cardano-db-sync/about-db-sync',
                component: ComponentCreator('/cardano-components/cardano-db-sync/about-db-sync', '4c1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cardano-components/cardano-db-sync/best-practices',
                component: ComponentCreator('/cardano-components/cardano-db-sync/best-practices', 'cb7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cardano-components/cardano-db-sync/big-query',
                component: ComponentCreator('/cardano-components/cardano-db-sync/big-query', 'ee1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cardano-components/cardano-db-sync/db-sync-components',
                component: ComponentCreator('/cardano-components/cardano-db-sync/db-sync-components', 'c52'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cardano-components/cardano-db-sync/db-sync-set-up',
                component: ComponentCreator('/cardano-components/cardano-db-sync/db-sync-set-up', '5ea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cardano-components/cardano-explorer',
                component: ComponentCreator('/cardano-components/cardano-explorer', '9f2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cardano-components/cardano-graphql',
                component: ComponentCreator('/cardano-components/cardano-graphql', 'd91'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cardano-components/cardano-ledger-specs',
                component: ComponentCreator('/cardano-components/cardano-ledger-specs', '273'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cardano-components/cardano-node',
                component: ComponentCreator('/cardano-components/cardano-node', '77b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cardano-components/cardano-rosetta/about-cardano-rosetta',
                component: ComponentCreator('/cardano-components/cardano-rosetta/about-cardano-rosetta', 'fa7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cardano-components/cardano-rosetta/api-calls-rosetta',
                component: ComponentCreator('/cardano-components/cardano-rosetta/api-calls-rosetta', '551'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cardano-components/cardano-rosetta/get-started-rosetta',
                component: ComponentCreator('/cardano-components/cardano-rosetta/get-started-rosetta', '411'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cardano-components/cardano-rosetta/learn',
                component: ComponentCreator('/cardano-components/cardano-rosetta/learn', 'e23'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cardano-components/cardano-rtview',
                component: ComponentCreator('/cardano-components/cardano-rtview', 'b6e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cardano-components/cardano-serialization-lib',
                component: ComponentCreator('/cardano-components/cardano-serialization-lib', '044'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cardano-components/cardano-wallet',
                component: ComponentCreator('/cardano-components/cardano-wallet', '6d2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cardano-components/daedalus-wallet',
                component: ComponentCreator('/cardano-components/daedalus-wallet', '17e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cardano-components/ouroboros-network',
                component: ComponentCreator('/cardano-components/ouroboros-network', '6c2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cardano-components/smash',
                component: ComponentCreator('/cardano-components/smash', 'b0b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cardano-sidechains/getting-started/block-explorer',
                component: ComponentCreator('/cardano-sidechains/getting-started/block-explorer', '3f4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cardano-sidechains/getting-started/introduction-sidechains',
                component: ComponentCreator('/cardano-sidechains/getting-started/introduction-sidechains', 'de4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cardano-sidechains/getting-started/ouroboros-description',
                component: ComponentCreator('/cardano-sidechains/getting-started/ouroboros-description', 'f4c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cardano-sidechains/proof-of-concept-evm-sidechain/create-and-fund-accounts',
                component: ComponentCreator('/cardano-sidechains/proof-of-concept-evm-sidechain/create-and-fund-accounts', 'd61'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cardano-sidechains/proof-of-concept-evm-sidechain/deploy-smart-contracts/setup-development',
                component: ComponentCreator('/cardano-sidechains/proof-of-concept-evm-sidechain/deploy-smart-contracts/setup-development', '209'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cardano-sidechains/proof-of-concept-evm-sidechain/deploy-smart-contracts/solidity-resources',
                component: ComponentCreator('/cardano-sidechains/proof-of-concept-evm-sidechain/deploy-smart-contracts/solidity-resources', '079'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cardano-sidechains/proof-of-concept-evm-sidechain/deploy-smart-contracts/verify-contract',
                component: ComponentCreator('/cardano-sidechains/proof-of-concept-evm-sidechain/deploy-smart-contracts/verify-contract', '5a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cardano-sidechains/proof-of-concept-evm-sidechain/metamask',
                component: ComponentCreator('/cardano-sidechains/proof-of-concept-evm-sidechain/metamask', '526'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cardano-sidechains/proof-of-concept-evm-sidechain/sidechain-token',
                component: ComponentCreator('/cardano-sidechains/proof-of-concept-evm-sidechain/sidechain-token', '426'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cardano-sidechains/proof-of-concept-evm-sidechain/transferring-tokens',
                component: ComponentCreator('/cardano-sidechains/proof-of-concept-evm-sidechain/transferring-tokens', '061'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cardano-sidechains/sidechain-toolkit/',
                component: ComponentCreator('/cardano-sidechains/sidechain-toolkit/', '445'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cardano-sidechains/sidechain-toolkit/chain-follower',
                component: ComponentCreator('/cardano-sidechains/sidechain-toolkit/chain-follower', 'cfe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cardano-sidechains/sidechain-toolkit/committee-rotation',
                component: ComponentCreator('/cardano-sidechains/sidechain-toolkit/committee-rotation', '27f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cardano-sidechains/sidechain-toolkit/mainchain-plutus-scripts',
                component: ComponentCreator('/cardano-sidechains/sidechain-toolkit/mainchain-plutus-scripts', '51b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cardano-sidechains/support/getting-support',
                component: ComponentCreator('/cardano-sidechains/support/getting-support', 'b15'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cardano-sidechains/support/sidechain-faq',
                component: ComponentCreator('/cardano-sidechains/support/sidechain-faq', 'e5c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cardano-testnets/',
                component: ComponentCreator('/cardano-testnets/', '06b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cardano-testnets/about/feature-overview',
                component: ComponentCreator('/cardano-testnets/about/feature-overview', 'f5f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cardano-testnets/about/secp',
                component: ComponentCreator('/cardano-testnets/about/secp', '1f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cardano-testnets/about/testnet-introduction',
                component: ComponentCreator('/cardano-testnets/about/testnet-introduction', '73f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cardano-testnets/daedalus-testnet',
                component: ComponentCreator('/cardano-testnets/daedalus-testnet', '6b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cardano-testnets/getting-started',
                component: ComponentCreator('/cardano-testnets/getting-started', 'f65'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cardano-testnets/local-testnet',
                component: ComponentCreator('/cardano-testnets/local-testnet', '675'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cardano-testnets/resources',
                component: ComponentCreator('/cardano-testnets/resources', '510'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cardano-testnets/support-feedback',
                component: ComponentCreator('/cardano-testnets/support-feedback', 'c9a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cardano-testnets/tools/faucet',
                component: ComponentCreator('/cardano-testnets/tools/faucet', 'f6a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cardano-testnets/tools/plutus-fee-estimator',
                component: ComponentCreator('/cardano-testnets/tools/plutus-fee-estimator', '5df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cardano-testnets/tools/staking-calculator',
                component: ComponentCreator('/cardano-testnets/tools/staking-calculator', '802'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/community/ambassador-program',
                component: ComponentCreator('/community/ambassador-program', '0f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/community/Cardano-stack-exchange',
                component: ComponentCreator('/community/Cardano-stack-exchange', 'bd5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/community/cips',
                component: ComponentCreator('/community/cips', '092'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/community/community-content',
                component: ComponentCreator('/community/community-content', 'fe3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/community/essential-cardano',
                component: ComponentCreator('/community/essential-cardano', '930'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/community/getting-support',
                component: ComponentCreator('/community/getting-support', '915'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/development-guidelines/cardano-node-course',
                component: ComponentCreator('/development-guidelines/cardano-node-course', '6b5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/development-guidelines/installing-the-cardano-node',
                component: ComponentCreator('/development-guidelines/installing-the-cardano-node', '9b7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/development-guidelines/node-monitoring',
                component: ComponentCreator('/development-guidelines/node-monitoring', '27e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/development-guidelines/node-tests',
                component: ComponentCreator('/development-guidelines/node-tests', '6ff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/development-guidelines/transaction-tutorials/',
                component: ComponentCreator('/development-guidelines/transaction-tutorials/', 'c89'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/development-guidelines/transaction-tutorials/minting-transaction',
                component: ComponentCreator('/development-guidelines/transaction-tutorials/minting-transaction', 'c03'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/development-guidelines/transaction-tutorials/multiple-purposes',
                component: ComponentCreator('/development-guidelines/transaction-tutorials/multiple-purposes', '3aa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/development-guidelines/transaction-tutorials/redelegate-transaction',
                component: ComponentCreator('/development-guidelines/transaction-tutorials/redelegate-transaction', '51f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/development-guidelines/transaction-tutorials/stake-transaction',
                component: ComponentCreator('/development-guidelines/transaction-tutorials/stake-transaction', 'b20'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/development-guidelines/transaction-tutorials/withdraw-transaction',
                component: ComponentCreator('/development-guidelines/transaction-tutorials/withdraw-transaction', '091'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/development-guidelines/use-cli',
                component: ComponentCreator('/development-guidelines/use-cli', '5e0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/explore-cardano/cardano-architecture',
                component: ComponentCreator('/explore-cardano/cardano-architecture', '3ae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/evolution/cardano-design-rationale',
                component: ComponentCreator('/evolution/cardano-design-rationale', '9ff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/explore-cardano/cardano-entropy',
                component: ComponentCreator('/explore-cardano/cardano-entropy', '765'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/explore-cardano/cardano-network/',
                component: ComponentCreator('/explore-cardano/cardano-network/', '352'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/explore-cardano/cardano-network/networking-protocol',
                component: ComponentCreator('/explore-cardano/cardano-network/networking-protocol', 'b3f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/explore-cardano/cardano-network/p2p-networking',
                component: ComponentCreator('/explore-cardano/cardano-network/p2p-networking', '0df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/explore-cardano/concurrency',
                component: ComponentCreator('/explore-cardano/concurrency', 'f08'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/explore-cardano/eras-and-phases',
                component: ComponentCreator('/explore-cardano/eras-and-phases', 'fe2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/explore-cardano/explain-nonce',
                component: ComponentCreator('/explore-cardano/explain-nonce', '6f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/explore-cardano/fee-structure',
                component: ComponentCreator('/explore-cardano/fee-structure', '359'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/explore-cardano/monetary-policy',
                component: ComponentCreator('/explore-cardano/monetary-policy', '32d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/explore-cardano/parameter-guide',
                component: ComponentCreator('/explore-cardano/parameter-guide', '941'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/explore-cardano/relevant-research-papers',
                component: ComponentCreator('/explore-cardano/relevant-research-papers', 'e4c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/explore-cardano/time',
                component: ComponentCreator('/explore-cardano/time', 'cb5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/introduction',
                component: ComponentCreator('/introduction', '83b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/learn/about-hard-forks',
                component: ComponentCreator('/learn/about-hard-forks', 'e30'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/learn/cardano-addresses',
                component: ComponentCreator('/learn/cardano-addresses', '641'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/learn/cardano-keys',
                component: ComponentCreator('/learn/cardano-keys', 'd74'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/learn/cardano-node',
                component: ComponentCreator('/learn/cardano-node', '3d6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/learn/chain-confirmation-versus-transaction-confirmation',
                component: ComponentCreator('/learn/chain-confirmation-versus-transaction-confirmation', '4b5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/learn/consensus-explained',
                component: ComponentCreator('/learn/consensus-explained', '281'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/learn/delegation',
                component: ComponentCreator('/learn/delegation', '2cd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/learn/eutxo-explainer',
                component: ComponentCreator('/learn/eutxo-explainer', '3fd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/learn/ouroboros-overview',
                component: ComponentCreator('/learn/ouroboros-overview', 'dec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/learn/pledging-and-delegation-options',
                component: ComponentCreator('/learn/pledging-and-delegation-options', 'a61'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/learn/pledging-rewards',
                component: ComponentCreator('/learn/pledging-rewards', 'e7f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/learn/stake-pools',
                component: ComponentCreator('/learn/stake-pools', 'a60'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/native-tokens/exchange-multi-asset-management-scenarios',
                component: ComponentCreator('/native-tokens/exchange-multi-asset-management-scenarios', 'be6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/native-tokens/exercises',
                component: ComponentCreator('/native-tokens/exercises', '6b9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/native-tokens/faqs',
                component: ComponentCreator('/native-tokens/faqs', '55e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/native-tokens/getting-started',
                component: ComponentCreator('/native-tokens/getting-started', '76e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/native-tokens/learn',
                component: ComponentCreator('/native-tokens/learn', '99c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/native-tokens/listing-cardano-native-assets-on-an-exchange',
                component: ComponentCreator('/native-tokens/listing-cardano-native-assets-on-an-exchange', '066'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/native-tokens/minimum-ada-value-requirement',
                component: ComponentCreator('/native-tokens/minimum-ada-value-requirement', 'b68'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/new-to-cardano/',
                component: ComponentCreator('/new-to-cardano/', '5c8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/new-to-cardano/cardano-tracking-tools',
                component: ComponentCreator('/new-to-cardano/cardano-tracking-tools', '4cd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/new-to-cardano/how-to-delegate',
                component: ComponentCreator('/new-to-cardano/how-to-delegate', 'e3a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/new-to-cardano/how-to-purchase-ada',
                component: ComponentCreator('/new-to-cardano/how-to-purchase-ada', '0ef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/new-to-cardano/proof-of-stake',
                component: ComponentCreator('/new-to-cardano/proof-of-stake', '7d3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/new-to-cardano/types-of-wallets',
                component: ComponentCreator('/new-to-cardano/types-of-wallets', '57d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/new-to-cardano/what-is-a-blockchain',
                component: ComponentCreator('/new-to-cardano/what-is-a-blockchain', '163'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/new-to-cardano/what-is-a-cryptocurrency',
                component: ComponentCreator('/new-to-cardano/what-is-a-cryptocurrency', '91f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/new-to-cardano/what-is-a-smart-contract',
                component: ComponentCreator('/new-to-cardano/what-is-a-smart-contract', '8b5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/new-to-cardano/why-use-cardano',
                component: ComponentCreator('/new-to-cardano/why-use-cardano', '630'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/operating-a-stake-pool/about-stake-pools',
                component: ComponentCreator('/operating-a-stake-pool/about-stake-pools', 'fc3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/operating-a-stake-pool/creating-a-stake-pool',
                component: ComponentCreator('/operating-a-stake-pool/creating-a-stake-pool', 'dda'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/operating-a-stake-pool/creating-keys-and-certificates',
                component: ComponentCreator('/operating-a-stake-pool/creating-keys-and-certificates', 'c94'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/operating-a-stake-pool/guidelines-for-large-spos',
                component: ComponentCreator('/operating-a-stake-pool/guidelines-for-large-spos', '46f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/operating-a-stake-pool/node-connectivity',
                component: ComponentCreator('/operating-a-stake-pool/node-connectivity', '4af'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/operating-a-stake-pool/performance',
                component: ComponentCreator('/operating-a-stake-pool/performance', 'a2a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/operating-a-stake-pool/public-stake-pools',
                component: ComponentCreator('/operating-a-stake-pool/public-stake-pools', '53a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/operating-a-stake-pool/ranking',
                component: ComponentCreator('/operating-a-stake-pool/ranking', '77c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/operating-a-stake-pool/SMASH',
                component: ComponentCreator('/operating-a-stake-pool/SMASH', '033'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/operating-a-stake-pool/stake-pool-operations-101',
                component: ComponentCreator('/operating-a-stake-pool/stake-pool-operations-101', 'd81'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/pioneer-programs/plutus-pioneers',
                component: ComponentCreator('/pioneer-programs/plutus-pioneers', 'cbf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/release-notes/comp-matrix',
                component: ComponentCreator('/release-notes/comp-matrix', '2a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/release-notes/release-notes',
                component: ComponentCreator('/release-notes/release-notes', '080'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/scalability-solutions/hydra',
                component: ComponentCreator('/scalability-solutions/hydra', 'e8c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/scalability-solutions/mithril',
                component: ComponentCreator('/scalability-solutions/mithril', 'ad9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/smart-contracts/aiken',
                component: ComponentCreator('/smart-contracts/aiken', '0cc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/smart-contracts/marlowe',
                component: ComponentCreator('/smart-contracts/marlowe', 'aa5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/smart-contracts/plutus/collateral-mechanism',
                component: ComponentCreator('/smart-contracts/plutus/collateral-mechanism', '427'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/smart-contracts/plutus/dapp-development',
                component: ComponentCreator('/smart-contracts/plutus/dapp-development', '86b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/smart-contracts/plutus/learn-about-plutus',
                component: ComponentCreator('/smart-contracts/plutus/learn-about-plutus', '5a5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/smart-contracts/plutus/plutus-resources',
                component: ComponentCreator('/smart-contracts/plutus/plutus-resources', 'e7a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/smart-contracts/plutus/plutus-scripts',
                component: ComponentCreator('/smart-contracts/plutus/plutus-scripts', 'ed1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/smart-contracts/plutus/Plutus-use-cases',
                component: ComponentCreator('/smart-contracts/plutus/Plutus-use-cases', '042'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/smart-contracts/plutus/sc-best-practices',
                component: ComponentCreator('/smart-contracts/plutus/sc-best-practices', 'b1a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/smart-contracts/plutus/transaction-costs-determinism',
                component: ComponentCreator('/smart-contracts/plutus/transaction-costs-determinism', 'acc'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
